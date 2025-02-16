import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import "./profileStyles.css";

export default function ProfileInfo() {
  const { state } = useLocation();
  const [step, setStep] = useState(1);
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [formData, setFormData] = useState({
    agreeTerms: false,
    firstName: state?.firstName || "",
    secondName: state?.secondName || "",
    dob: state?.dob || "",
    country: "",
    city: "",
  });

  useEffect(() => {
    axios.get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        setCountries(response.data.data.map(c => c.country));
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setCities([]);
    setFormData((prev) => ({ ...prev, country }));

    if (country) {
      axios.post("https://countriesnow.space/api/v0.1/countries/cities", { country })
        .then((response) => {
          setCities(response.data.data || []);
        })
        .catch((error) => console.error("Error fetching cities:", error));
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData,
  });

  const onSubmit = (data, event) => {
    event.preventDefault();
    setFormData((prev) => ({ ...prev, ...data }));
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="logo">COMPANY NAME</div>
        <div className="steps">
          <span className={step >= 1 ? "active" : ""}></span>
          <span className={step >= 2 ? "active" : ""}></span>
          <span className={step >= 3 ? "active" : ""}></span>
        </div>
      </div>

      <div className="form-container">

        {step === 1 && (
          
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Profile Info</h2>
            <p>Fill in the data below to complete your profile.</p>
            <h3>Personal Data</h3>
            
            <div className="checkbox-container">
              <input 
                {...register("agreeTerms", { required: "You must agree to the terms" })} 
                type="checkbox" 
                id="agreeTerms" 
                className="custom-checkbox"
                checked={formData.agreeTerms}
                onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
              />
              <label htmlFor="agreeTerms">I agree with the Terms of use</label>
              <p className={`error ${errors.agreeTerms ? "visible" : ""}`}>
                {errors.agreeTerms?.message}
              </p>
            </div>

            <label>First Name</label>
            <input 
              {...register("firstName", { required: "First name is required" })} 
              value={formData.firstName}
              onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              placeholder="First Name" 
            />
            <p className={`error ${errors.firstName ? "visible" : ""}`}>
              {errors.firstName?.message}
            </p>

            <label>Second Name</label>
            <input 
              {...register("secondName", { required: "Second name is required" })} 
              value={formData.secondName}
              onChange={(e) => setFormData({ ...formData, secondName: e.target.value })}
              placeholder="Second Name" 
            />
            <p className={`error ${errors.secondName ? "visible" : ""}`}>
              {errors.secondName?.message}
            </p>

            <label>Date of Birth</label>
            <input 
              {...register("dob", { required: "Date of birth is required" })} 
              value={formData.dob}
              onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
              type="date" 
            />
            <p className={`error ${errors.dob ? "visible" : ""}`}>
              {errors.dob?.message}
            </p>

            <label>Country</label>
            <select
              {...register("country", { required: "Please select a country" })}
              onChange={handleCountryChange}
              value={formData.country}
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            <p className={`error ${errors.country ? "visible" : ""}`}>
              {errors.country?.message}
            </p>

            <label>City</label>
            <select
              {...register("city", { required: "Please select a city" })}
              disabled={!selectedCountry || cities.length === 0}
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            <p className={`error ${errors.city ? "visible" : ""}`}>
              {errors.city?.message}
            </p>

            <button type="submit">Go Next</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmit(onSubmit)} className="formGen">
            <h2>Profile Info</h2>
            <p>Fill in the data below to complete your profile.</p>
            <h3>Contacts</h3>
            <p>These contacts are used to inform about orders.</p>

            <div className="input-group">
              <span className="icon">📧</span>
              <input
                {...register("email", { required: "Email is required" })}
                value={formData.email || ""}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="Email"
                type="email"
              />
            </div>
            <p className={`error ${errors.email ? "visible" : ""}`}>
              {errors.email?.message}
            </p>

            <div className="input-group">
              <span className="icon">📞</span>
              <input
                {...register("phone", { 
                  required: "Phone number is required", 
                  pattern: { 
                    value: /^\+\d{10,15}$/, 
                    message: "Phone number must start with '+' and contain 10-15 digits"
                  }
                })}
                value={formData.phone || ""}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1234567890"
                type="tel"
                maxLength="16"
              />
            </div>
            <p className={`error ${errors.phone ? "visible" : ""}`}>
              {errors.phone?.message}
            </p>


            <h3>Social Network</h3>
            <p>Indicate the desired communication method.</p>

            <div className="input-group">
              <label htmlFor="communication">Preferred Communication</label>
              <select
                {...register("communication")}
                value={formData.communication || ""}
                onChange={(e) => setFormData({ ...formData, communication: e.target.value })}
                className="custom-select"
              >
                <option value="">Choose...</option>
                <option value="skype">Skype</option>
                <option value="discord">Discord</option>
                <option value="telegram">Telegram</option>
              </select>
              <input
                type="text"
                {...register("communicationUsername")}
                value={formData.communicationUsername || ""}
                onChange={(e) => setFormData({ ...formData, communicationUsername: e.target.value })}
                placeholder="@profile"
                className="custom-input"
              />
            </div>

            <div className="input-group">
              <label htmlFor="socialNetwork">Social Network</label>
              <select
                {...register("socialNetwork")}
                value={formData.socialNetwork || ""}
                onChange={(e) => setFormData({ ...formData, socialNetwork: e.target.value })}
                className="custom-select"
              >
                <option value="">Choose...</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="twitter">Twitter</option>
              </select>
              <input
                type="text"
                {...register("socialUsername")}
                value={formData.socialUsername || ""}
                onChange={(e) => setFormData({ ...formData, socialUsername: e.target.value })}
                placeholder="@profile"
                className="custom-input"
              />
            </div>


            <div className="btn-group">
              <button type="button" onClick={() => setStep(1)}>Back</button>
              <button type="submit">Go Next</button>
            </div>
          </form>
        )}
        
        {step === 3 && (
          <div className="form-container">
            <h2>Profile Info</h2>
            <p>Fill in the data below to complete your profile.</p>
            <h3>Delivery address</h3>
            <p className="subtext">Used for shipping orders</p>

            <label htmlFor="address">Address</label>
            <input
              {...register("address", { required: "Address is required" })}
              value={formData.address || ""}
              onChange={(e) => setFormData({ ...formData, address: e.target.value })}
              placeholder="Enter your address"
              type="text"
            />
            <p className={`error ${errors.address ? "visible" : ""}`}>
              {errors.address?.message}
            </p>

            <label htmlFor="country">Country</label>
            <select
              {...register("country", { required: "Please select a country" })}
              onChange={handleCountryChange}
              value={formData.country}
            >
              <option value="">Select a country</option>
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </select>
            <p className={`error ${errors.country ? "visible" : ""}`}>
              {errors.country?.message}
            </p>

            <label htmlFor="city">City</label>
            <select
              {...register("city", { required: "Please select a city" })}
              disabled={!selectedCountry || cities.length === 0}
              value={formData.city}
              onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            >
              <option value="">Select a city</option>
              {cities.map((city, index) => (
                <option key={index} value={city}>{city}</option>
              ))}
            </select>
            <p className={`error ${errors.city ? "visible" : ""}`}>
              {errors.city?.message}
            </p>

            <label htmlFor="zip">Zip code</label>
            <input
              {...register("zip", { required: "Zip code is required", pattern: { value: /^\d{5}$/, message: "Invalid zip code" } })}
              value={formData.zip || ""}
              onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
              placeholder="Enter zip code"
              type="text"
              maxLength="5"
            />
            <p className={`error ${errors.zip ? "visible" : ""}`}>
              {errors.zip?.message}
            </p>

            <label htmlFor="optional">Optional</label>
            <input
              {...register("optional")}
              value={formData.optional || ""}
              onChange={(e) => setFormData({ ...formData, optional: e.target.value })}
              placeholder="Additional info"
              type="text"
            />

            <div className="buttons">
              <button className="back-btn" onClick={() => setStep(2)}>Back</button>
              <button className="save-btn" onClick={() => console.log("Final Data:", JSON.stringify(formData, null, 2))}>
                Save
              </button>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}