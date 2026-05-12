import { useState, useRef, useEffect } from "react";
import { FiSettings, FiGlobe, FiMail, FiCreditCard, FiFileText, FiSliders, FiShield, FiMoreHorizontal, FiBell, FiMessageCircle, FiX, FiUpload, FiUser } from "react-icons/fi";
import { FaFacebook, FaGoogle } from "react-icons/fa";

import { FiChevronDown } from "react-icons/fi";

import { FaCcStripe, FaPaypal } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { FiClock, FiMonitor, FiSmartphone, FiLogOut } from "react-icons/fi";

import { FiRotateCcw } from "react-icons/fi";

 

const tabs = [
  { id: "general", label: "General Settings", icon: <FiSettings /> },
  { id: "social", label: "Social Login", icon: <FiGlobe /> },
  { id: "ai", label: "AI Settings", icon: <FiSliders /> },
  { id: "email", label: "Email & SMS", icon: <FiMail /> },
  { id: "subscription", label: "Subscription", icon: <FiCreditCard /> },
  { id: "payment", label: "Payment Gateway", icon: <FiCreditCard /> },
  { id: "documents", label: "Documents", icon: <FiFileText /> },
  { id: "features", label: "Configure Features", icon: <FiSliders /> },
  { id: "security", label: "Security & Tokens", icon: <FiShield /> },
  { id: "misc", label: "Miscellaneous", icon: <FiMoreHorizontal /> },
  { id: "notice", label: "Notice Board Setting", icon: <FiBell /> },
  { id: "whatsapp", label: "Whatsapp API", icon: <FiMessageCircle /> },
];

function Toggle({ checked, onChange }) {
  return (
    <button
      onClick={() => onChange(!checked)}
      className={`relative inline-flex items-center w-11 h-6 rounded-full transition-colors duration-200 focus:outline-none ${checked ? "bg-teal-500" : "bg-gray-300"}`}
    >
      <span
        className={`inline-block w-4 h-4 bg-white rounded-full shadow transform transition-transform duration-200 ${checked ? "translate-x-6" : "translate-x-1"}`}
      />
    </button>
  );
}

function Modal({ title, subtitle, open, onClose, onSave, platform }) {
  const [id, setId] = useState("");
  const [secret, setSecret] = useState("");

  if (!open) return null;

  const handleSave = () => {
    onSave({ id, secret });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-md mx-auto">
        <div className="p-5 border-b border-gray-100 flex items-start justify-between">
          <div>
            <h2 className="text-base font-semibold text-gray-800">{title}</h2>
            <p className="text-xs text-gray-500 mt-0.5">{subtitle}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <FiX size={20} />
          </button>
        </div>

        <div className="p-5">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-5">
            <p className="text-xs text-yellow-700">
              Please enter your {platform === "google" ? "Google" : "Facebook"} OAuth credential to enable this feature.
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">ID</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder={`Enter ${platform === "google" ? "Google" : "Facebook"} Client ID`}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Secret Code</label>
            <input
              type="password"
              value={secret}
              onChange={(e) => setSecret(e.target.value)}
              placeholder="Enter Secret Code"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent placeholder-gray-400"
            />
          </div>
        </div>

        <div className="p-5 border-t border-gray-100 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2 text-sm text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
          >
            cancel
          </button>
          <button
            onClick={handleSave}
            className="px-5 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
          >
            Save & Enable
          </button>
        </div>
      </div>
    </div>
  );
}

function GeneralSettings() {
  const [companyName, setCompanyName] = useState("CargoAdmin Inc.");
  const [websiteTitle, setWebsiteTitle] = useState("CargoAdmin- Logistics Managment Platform");
  const [description, setDescription] = useState("Complete logistics and cargo managment solution for modern businesses");
  const [socialUrl, setSocialUrl] = useState("logistics, cargo, shipping, freight, customs");
  const [maintenance, setMaintenance] = useState(false);
  const [systemLogo, setSystemLogo] = useState(null);
  const [loadingLogo, setLoadingLogo] = useState(null);
  const systemLogoRef = useRef();
  const loadingLogoRef = useRef();

  const handleImageUpload = (e, setter) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setter(url);
    }
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-5">General Settings</h2>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Company Name</label>
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">System Logo</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              {systemLogo ? (
                <img src={systemLogo} alt="System Logo" className="w-full h-full object-cover" />
              ) : (
                <FiUpload className="text-gray-400" size={20} />
              )}
            </div>
            <input type="file" accept="image/*" ref={systemLogoRef} className="hidden" onChange={(e) => handleImageUpload(e, setSystemLogo)} />
            <button
              onClick={() => systemLogoRef.current.click()}
              className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Upload Logo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Loading Logo</label>
          <div className="flex items-center gap-4">
            <div className="w-24 h-16 bg-gray-100 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden">
              {loadingLogo ? (
                <img src={loadingLogo} alt="Loading Logo" className="w-full h-full object-cover" />
              ) : (
                <FiUpload className="text-gray-400" size={20} />
              )}
            </div>
            <input type="file" accept="image/*" ref={loadingLogoRef} className="hidden" onChange={(e) => handleImageUpload(e, setLoadingLogo)} />
            <button
              onClick={() => loadingLogoRef.current.click()}
              className="px-4 py-2 text-sm text-white bg-teal-500 rounded-lg hover:bg-teal-600 transition-colors"
            >
              Upload Logo
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Website Title</label>
          <input
            type="text"
            value={websiteTitle}
            onChange={(e) => setWebsiteTitle(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Description</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1.5">Social Url</label>
          <input
            type="text"
            value={socialUrl}
            onChange={(e) => setSocialUrl(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
        </div>

        <div className="bg-blue-50 rounded-lg p-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-800">Maintenance Mode</p>
            <p className="text-xs text-gray-500 mt-0.5">Enable to show maintenance page to users</p>
          </div>
          <Toggle checked={maintenance} onChange={setMaintenance} />
        </div>
      </div>
    </div>
  );
}

function SocialLoginSettings() {
  const [fbEnabled, setFbEnabled] = useState(false);
  const [googleEnabled, setGoogleEnabled] = useState(false);
  const [fbModal, setFbModal] = useState(false);
  const [googleModal, setGoogleModal] = useState(false);
  const [fbCredentials, setFbCredentials] = useState(null);
  const [googleCredentials, setGoogleCredentials] = useState(null);

  const handleFbToggle = (val) => {
    if (val) setFbModal(true);
    else setFbEnabled(false);
  };

  const handleGoogleToggle = (val) => {
    if (val) setGoogleModal(true);
    else setGoogleEnabled(false);
  };

  const handleFbSave = (creds) => {
    setFbCredentials(creds);
    setFbEnabled(true);
  };

  const handleGoogleSave = (creds) => {
    setGoogleCredentials(creds);
    setGoogleEnabled(true);
  };

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-5">Social Login Settings</h2>

      <div className="space-y-3">
        <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FaFacebook className="text-blue-600" size={18} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Login with Facebook</p>
              <p className="text-xs text-gray-500">Allow users to sign in with Facebook</p>
            </div>
          </div>
          <Toggle checked={fbEnabled} onChange={handleFbToggle} />
        </div>

        <div className="bg-blue-50 rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-sm">
              <FaGoogle className="text-red-500" size={16} />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-800">Login with Google</p>
              <p className="text-xs text-gray-500">Allow users to sign in with Google</p>
            </div>
          </div>
          <Toggle checked={googleEnabled} onChange={handleGoogleToggle} />
        </div>
      </div>

      <Modal
        open={fbModal}
        onClose={() => setFbModal(false)}
        title="Configure Facebook Login"
        subtitle="Enable secure login using Facebook account"
        platform="facebook"
        onSave={handleFbSave}
      />

      <Modal
        open={googleModal}
        onClose={() => setGoogleModal(false)}
        title="Configure Google Login"
        subtitle="Enable secure login using Google account"
        platform="google"
        onSave={handleGoogleSave}
      />
    </div>
  );
}

function PlaceholderTab({ label }) {
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-semibold text-gray-800 mb-4">{label}</h2>
        this is default text
    </div>
  );
}


function CustomDropdown({ value, onChange, options }) {
  const [open, setOpen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 bg-white focus:outline-none"
      >

        <span>{value}</span>
        <FiChevronDown className="text-gray-500" size={16} />
      </button>
      {open && (
        <div className="absolute z-50 top-full left-0 right-0 bg-white border border-gray-200 rounded-b-lg shadow-md overflow-hidden">
          {options.map((opt) => (
            <button
              key={opt}
              onClick={() => { onChange(opt); setOpen(false); }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${value === opt ? "bg-blue-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"}`}
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

const providerOptions = ["Open AI", "Anthropic(Claude)", "Google AI"];

const modelsByProvider = {
  "Open AI": ["GPT-4", "GPT-3.5 Turbo", "Claude 3 Opus"],
  "Anthropic(Claude)": ["Claude 3 Opus", "Claude 3 Sonnet", "Claude 3 Haiku"],
  "Google AI": ["Gemini Pro", "Gemini Ultra", "PaLM 2"],
};

 function AISettingsPanel() {
  const [enabled, setEnabled] = useState(true);
  const [provider, setProvider] = useState("Open AI");
  const [model, setModel] = useState("GPT-4");
  const [aiKey, setAiKey] = useState("");
  const [instructions, setInstructions] = useState("");
  const [forceInstructions, setForceInstructions] = useState(true);

  const handleProviderChange = (val) => {
    setProvider(val);
    setModel(modelsByProvider[val][0]);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-3 py-6 sm:px-6 sm:py-8 ">
      <div className="w-full max-w-6xl space-y-5 ">

        <div className="bg-white border border-gray-200 rounded-2xl overflow-visible shadow-sm">
          <div className="px-5 pt-5 pb-2">
            <h2 className="text-lg font-bold text-gray-800">AI Settings</h2>
          </div>

          <div className="mx-5 mb-5 bg-blue-50 rounded-xl px-4 py-3 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">Enable AI Chatbot</p>
              <p className="text-xs text-gray-500 mt-0.5">Activate</p>
            </div>
            <Toggle checked={enabled} onChange={setEnabled} />
          </div>

          <div className="px-5 pb-5 space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">AI Provider</label>
              <CustomDropdown value={provider} onChange={handleProviderChange} options={providerOptions} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">Model</label>
              <CustomDropdown value={model} onChange={setModel} options={modelsByProvider[provider]} />
            </div>

            <div>
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
                Test Connection
              </button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-3">AI Knowledge Base (Admin Control)</h2>
          <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-800 mb-2">Custom AI Instructions</p>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Enter legal updates, rules, or instruction that AI should when answering users..."
                rows={4}
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
              />
            </div>

            <div className="flex items-center gap-3">
              <Toggle checked={forceInstructions} onChange={setForceInstructions} />
              <span className="text-sm text-gray-600">Force AI to follow admin instructions strictly</span>
            </div>

            <div>
              <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
                Save Instructions
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}



 
 function EmailSMSSetup() {
  const [form, setForm] = useState({
    smtpHost: "",
    port: "",
    encryption: "TLS",
    username: "",
    password: "",
    provider: "Twilio",
    accountSID: "",
    authToken: "",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  
const encryptionOptions = ["TLS", "SSL", "None"];
const providerOptions = ["Twilio", "Nexmo", "Plivo", "MSG91"];


 
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center px-3 py-6 sm:px-6 sm:py-8">
      <div className="w-full max-w-6xl bg-white border border-gray-200 rounded-2xl shadow-sm p-5 sm:p-6">
 
        <h2 className="text-base font-bold text-gray-800 mb-4">Email & SMS Setup</h2>
 
        <p className="text-sm font-semibold text-gray-700 mb-3">SMTP Email Configuration</p>
 
        <div className="space-y-4">
          <div>
            <label className="block text-xs sm:text-sm text-gray-700 mb-1">SMTP Host</label>
            <input
              type="text"
              value={form.smtpHost}
              onChange={(e) => handleChange("smtpHost", e.target.value)}
              placeholder="smpt.gmail.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
 
          <div className="flex gap-3">
            <div className="flex-1">
              <label className="block text-xs sm:text-sm text-gray-700 mb-1">Port</label>
              <input
                type="text"
                value={form.port}
                onChange={(e) => handleChange("port", e.target.value)}
                placeholder="587"
                className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs sm:text-sm text-gray-700 mb-1">Encryption</label>
              <CustomDropdown value={form.encryption} onChange={(val) => handleChange("encryption", val)} options={encryptionOptions} />
            </div>
          </div>
 
          <div>
            <label className="block text-xs sm:text-sm text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={form.username}
              onChange={(e) => handleChange("username", e.target.value)}
              placeholder="your-email@domain.com"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
 
          <div>
            <label className="block text-xs sm:text-sm text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => handleChange("password", e.target.value)}
              placeholder="Enter SMPT password"
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
 
          <div className="pt-1">
            <p className="text-sm font-semibold text-gray-700 mb-3">SMS Gateway Setup</p>
 
            <div className="space-y-4">
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 mb-1">Provider</label>
                <CustomDropdown value={form.provider} onChange={(val) => handleChange("provider", val)} options={providerOptions} />
              </div>
 
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 mb-1">Account SID</label>
                <input
                  type="text"
                  value={form.accountSID}
                  onChange={(e) => handleChange("accountSID", e.target.value)}
                  placeholder="Enter Account SID"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
 
              <div>
                <label className="block text-xs sm:text-sm text-gray-700 mb-1">Auth Token</label>
                <input
                  type="text"
                  value={form.authToken}
                  onChange={(e) => handleChange("authToken", e.target.value)}
                  placeholder="Enter Auth Token"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
                />
              </div>
            </div>
          </div>
 
          <div className="pt-2">
            <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
              Save Changes
            </button>
          </div>
        </div>
 
      </div>
    </div>
  );
}


function SubscriptionSettings() {
  const [form, setForm] = useState({
    autoRenewal: true,
    trialPeriod: "14",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4">Subscription Settings</h2>
 
      <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center justify-between mb-5">
        <div>
          <p className="text-sm font-semibold text-blue-600">Auto-renewal</p>
          <p className="text-xs text-blue-500 mt-0.5">Automatically renew subscriptions</p>
        </div>
        <Toggle checked={form.autoRenewal} onChange={(val) => handleChange("autoRenewal", val)} />
      </div>
 
      <div>
        <label className="block text-sm text-gray-700 mb-1.5">Trial Period (days)</label>
        <input
          type="number"
          value={form.trialPeriod}
          onChange={(e) => handleChange("trialPeriod", e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-300"
        />
      </div>
    </div>
  );
}



const gateways = [
  { key: "stripe", label: "Stipe", icon: <FaCcStripe className="text-indigo-600" size={26} /> },
  { key: "razorpay", label: "Rezorpay", icon: <SiRazorpay className="text-blue-500" size={22} /> },
  { key: "paypal", label: "Paypal", icon: <FaPaypal className="text-blue-700" size={22} /> },
];
 
 function PaymentGateway() {
  const [form, setForm] = useState({
    stripe: true,
    razorpay: true,
    paypal: true,
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

 
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4">Payment Gateway</h2>
 
      <div className="space-y-3 mb-6">
        {gateways.map(({ key, label, icon }) => (
          <div key={key} className="bg-blue-50 rounded-xl px-4 py-3.5 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {icon}
              <span className="text-sm font-medium text-gray-700">{label}</span>
            </div>
            <Toggle checked={form[key]} onChange={(val) => handleChange(key, val)} />
          </div>
        ))}
      </div>
 
      <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
        Save Changes
      </button>
    </div>
  );
}




const templateOptions = ["Template 1 - Modern", "Template 2 - Classic", "Template 3 - Minimal"];
 
function Documents() {
  const [form, setForm] = useState({
    invoiceTemplate: "Template 1 - Modern",
    documentPrefix: "INV-",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6 flex flex-col justify-between min-h-64">
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-5">
          Invoice / Proposal / Estimate / Credit Notes
        </h2>
 
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Invoice Template</label>
            <CustomDropdown
              value={form.invoiceTemplate}
              onChange={(val) => handleChange("invoiceTemplate", val)}
              options={templateOptions}
            />
          </div>
 
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1.5">Document Prefix</label>
            <input
              type="text"
              value={form.documentPrefix}
              onChange={(e) => handleChange("documentPrefix", e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
            />
          </div>
        </div>
      </div>
 
      <div className="mt-8">
        <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
          Save Changes
        </button>
      </div>
    </div>
  );
}



const featureList = ["customers", "tasks", "support", "leads"];
 
 function ConfigureFeatures() {
  const [form, setForm] = useState({
    customers: true,
    tasks: true,
    support: true,
    leads: true,
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4">Configure Features</h2>
 
      <div className="space-y-3 mb-6">
        {featureList.map((key) => (
          <div key={key} className="bg-blue-50 rounded-xl px-4 py-3.5 flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 capitalize">{key}</span>
            <Toggle checked={form[key]} onChange={(val) => handleChange(key, val)} />
          </div>
        ))}
      </div>
 
      <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
        Save Changes
      </button>
    </div>
  );
}



const cronOptions = [
  "Every 5 minutes",
  "Every 10 minutes",
  "Every 15 minutes",
  "Every 30 minutes",
  "Every 1 hour",
];
 
 function Miscellaneous() {
  const [form, setForm] = useState({
    cronInterval: "Every 5 minutes",
    enableMailbox: true,
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-base font-bold text-gray-800 mb-4">Miscellaneous</h2>
 
      <div className="space-y-4 mb-6">
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Cron Job Interval</label>
          <CustomDropdown
            value={form.cronInterval}
            onChange={(val) => handleChange("cronInterval", val)}
            options={cronOptions}
          />
        </div>
 
        <div className="bg-blue-50 rounded-xl px-4 py-3 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-gray-800">Enable Mailbox</p>
            <p className="text-xs text-gray-500 mt-0.5">Allow internal messaging system</p>
          </div>
          <Toggle checked={form.enableMailbox} onChange={(val) => handleChange("enableMailbox", val)} />
        </div>
      </div>
 
      <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
        Save Changes
      </button>
    </div>
  );
}




const displayModeOptions = ["List", "Grid", "Carousel"];
const expiryOptions = ["Never Expire", "After 7 days", "After 15 days", "After 30 days"];
const priorityOptions = ["Priority", "Pin", "Both"];
 
 function NoticeBoardSetting() {
  const [form, setForm] = useState({
    enabled: true,
    displayMode: "List",
    expirySystem: "Never Expire",
    visibilityControl: "Staff",
    priorityPinSystem: "Priority",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  const handleReset = () => {
    setForm({
      enabled: true,
      displayMode: "List",
      expirySystem: "Never Expire",
      visibilityControl: "Staff",
      priorityPinSystem: "Priority",
    });
  };
 
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-base font-bold text-gray-800">Notice Board Setting</h2>
        <button onClick={handleReset} className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors">
          <span>Reset</span>
          <FiRotateCcw size={14} />
        </button>
      </div>
 
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <label className="text-sm text-gray-700">Enable/Disable</label>
          <Toggle checked={form.enabled} onChange={(val) => handleChange("enabled", val)} />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Display Mode</label>
          <CustomDropdown
            value={form.displayMode}
            onChange={(val) => handleChange("displayMode", val)}
            options={displayModeOptions}
          />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Expiry System</label>
          <CustomDropdown
            value={form.expirySystem}
            onChange={(val) => handleChange("expirySystem", val)}
            options={expiryOptions}
          />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Visibility Control</label>
          <input
            type="text"
            value={form.visibilityControl}
            onChange={(e) => handleChange("visibilityControl", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Priority & Pin System</label>
          <CustomDropdown
            value={form.priorityPinSystem}
            onChange={(val) => handleChange("priorityPinSystem", val)}
            options={priorityOptions}
          />
        </div>
 
        <button className="w-full py-3 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors mt-2">
          Save
        </button>
      </div>
    </div>
  );
}




 function WhatsAppAPI() {
  const [form, setForm] = useState({
    enabled: true,
    phoneNumberId: "",
    accessToken: "",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6">
      <div className="flex items-start justify-between mb-5">
        <div>
          <h2 className="text-base font-bold text-gray-800">WhatsApp API</h2>
          <p className="text-xs text-gray-500 mt-0.5">Edit your WhatsApp API Settings</p>
        </div>
        <Toggle checked={form.enabled} onChange={(val) => handleChange("enabled", val)} />
      </div>
 
      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1">
          <label className="block text-sm text-gray-700 mb-1.5">WhatsApp Phone number ID</label>
          <input
            type="text"
            value={form.phoneNumberId}
            onChange={(e) => handleChange("phoneNumberId", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-gray-700 mb-1.5">WhatsApp Access Token</label>
          <input
            type="text"
            value={form.accessToken}
            onChange={(e) => handleChange("accessToken", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
      </div>
 
      <button className="px-6 py-2.5 text-sm font-medium text-white bg-teal-400 hover:bg-teal-500 rounded-lg transition-colors">
        Save Changes
      </button>
    </div>
  );
}




const logoutTimeOptions = ["1 day", "3 days", "7 days", "14 days", "30 days"];
const maxSessionOptions = ["1", "2", "3", "5", "10"];
 
const devices = [
  { id: 1, name: "Chrome on Windows", sub: "Windows 11  Chrome 124", location: "Mumbai, India", ip: "IP 103.21.344.xx", lastActive: "Just now", status: "Active", icon: <FiMonitor size={16} /> },
  { id: 2, name: "Mobile App on Android", sub: "Android 14 App 2.4.1", location: "Mumbai, India", ip: "IP 103.21.344.xx", lastActive: "Just now", status: "Active", icon: <FiSmartphone size={16} /> },
  { id: 3, name: "Mobile App on Android", sub: "Android 14 App 2.4.1", location: "Mumbai, India", ip: "IP 103.21.344.xx", lastActive: "Just now", status: "Active", icon: <FiSmartphone size={16} /> },
];
 
 function SecurityTokens() {
  const [form, setForm] = useState({
    authToken: "",
    captchaToken: "",
    reservedUsernames: "admin, support, help, root",
    rememberMe: true,
    autoLogin: true,
    logoutOnPasswordChange: true,
    autoLogoutTime: "7 days",
    maxActiveSessions: "3",
  });
 
  const handleChange = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };
 
  return (
    <div className="p-4 sm:p-6 space-y-5">
 
      <div className="border border-gray-200 rounded-xl p-4 sm:p-5 space-y-4">
        <h2 className="text-base font-bold text-gray-800">Security & Tokens</h2>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Authentication Token</label>
          <input
            type="text"
            value={form.authToken}
            onChange={(e) => handleChange("authToken", e.target.value)}
            placeholder="Enter authentication token"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">CAPCHA Token</label>
          <input
            type="text"
            value={form.captchaToken}
            onChange={(e) => handleChange("captchaToken", e.target.value)}
            placeholder="Enter CAPCHA token"
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
        </div>
 
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">Reserved Usernames (comma-separated)</label>
          <input
            type="text"
            value={form.reservedUsernames}
            onChange={(e) => handleChange("reservedUsernames", e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm text-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-300"
          />
          <p className="text-xs text-gray-400 mt-1">These usernames cannot be used during registration</p>
        </div>
 
        <div>
          <p className="text-sm font-semibold text-gray-800 mb-3">Session Settings</p>
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <div className="flex-1 bg-blue-50 rounded-xl px-3 py-2.5 flex items-start gap-2">
              <Toggle checked={form.rememberMe} onChange={(val) => handleChange("rememberMe", val)} />
              <div>
                <p className="text-xs font-semibold text-gray-700">Enable Remember Me on Login</p>
                <p className="text-xs text-gray-500 mt-0.5">Allow users to stay logged in on this device</p>
              </div>
            </div>
            <div className="flex-1 bg-blue-50 rounded-xl px-3 py-2.5 flex items-start gap-2">
              <Toggle checked={form.autoLogin} onChange={(val) => handleChange("autoLogin", val)} />
              <div>
                <p className="text-xs font-semibold text-gray-700">Allow Auto Login (Stay Logged In)</p>
                <p className="text-xs text-gray-500 mt-0.5">Keep users logged in across browser sessions</p>
              </div>
            </div>
          </div>
 
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1">
              <label className="flex items-center gap-1.5 text-sm text-gray-700 mb-1.5">
                <FiClock size={14} className="text-gray-500" />
                Auto Logout Time
              </label>
              <CustomDropdown value={form.autoLogoutTime} onChange={(val) => handleChange("autoLogoutTime", val)} options={logoutTimeOptions} />
            </div>
            <div className="flex-1">
              <label className="block text-sm text-gray-700 mb-1.5">Max Active Sessions</label>
              <CustomDropdown value={form.maxActiveSessions} onChange={(val) => handleChange("maxActiveSessions", val)} options={maxSessionOptions} />
            </div>
          </div>
        </div>
      </div>
 
      <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
        <p className="text-sm font-semibold text-gray-800 mb-3">Security Controls</p>
        <div className="flex flex-col sm:flex-row gap-3 items-start">
          <div className="flex-1 bg-blue-50 rounded-xl px-3 py-2.5 flex items-start gap-2">
            <Toggle checked={form.logoutOnPasswordChange} onChange={(val) => handleChange("logoutOnPasswordChange", val)} />
            <div>
              <p className="text-xs font-semibold text-gray-700">Logout on Password Change</p>
              <p className="text-xs text-gray-500 mt-0.5">Automatically logout all sessions when password is changed</p>
            </div>
          </div>
          <div className="flex-1 border border-yellow-400 rounded-xl px-3 py-2.5">
            <p className="text-sm font-semibold text-yellow-500">Force Logout from All Devices</p>
            <p className="text-xs text-gray-500 mt-0.5">Immediately sign out from all active sessions</p>
          </div>
        </div>
      </div>
 
      <div className="border border-gray-200 rounded-xl p-4 sm:p-5">
        <p className="text-sm font-semibold text-gray-800">Device management</p>
        <p className="text-xs text-gray-500 mb-4 mt-0.5">These are the devices currently logged in to your account</p>
 
        <div className="overflow-x-auto">
          <table className="w-full text-sm min-w-[480px]">
            <thead>
              <tr className="text-left text-xs text-gray-500 border-b border-gray-100">
                <th className="pb-2 font-medium">Device</th>
                <th className="pb-2 font-medium">Location</th>
                <th className="pb-2 font-medium">Last Active</th>
                <th className="pb-2 font-medium">Status</th>
                <th className="pb-2 font-medium">Action</th>
              </tr>
            </thead>
            <tbody>
              {devices.map((d) => (
                <tr key={d.id} className="border-b border-gray-50 last:border-0">
                  <td className="py-3 pr-3">
                    <div className="flex items-start gap-2">
                      <span className="text-gray-500 mt-0.5">{d.icon}</span>
                      <div>
                        <p className="text-xs font-medium text-gray-700">{d.name}</p>
                        <p className="text-xs text-gray-400">{d.sub}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 pr-3">
                    <p className="text-xs text-gray-700">{d.location}</p>
                    <p className="text-xs text-gray-400">{d.ip}</p>
                  </td>
                  <td className="py-3 pr-3 text-xs text-gray-600">{d.lastActive}</td>
                  <td className="py-3 pr-3">
                    <span className="px-2 py-0.5 text-xs font-medium text-green-600 bg-green-100 rounded-full">{d.status}</span>
                  </td>
                  <td className="py-3">
                    <button className="px-3 py-1 text-xs border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                      Logout
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
 
        <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 border border-red-400 rounded-lg text-sm text-red-500 hover:bg-red-50 transition-colors">
          <FiLogOut size={15} />
          <span className="font-medium">Logout from All Devices</span>
        </button>
        <p className="text-xs text-gray-400 text-center mt-1">Sign out from all active sessions on all devices</p>
      </div>
 
    </div>
  );
}




export default function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case "general": return <GeneralSettings/>;
      case "social": return <SocialLoginSettings/>;
      case "ai": return <AISettingsPanel/>;
      case "email": return <EmailSMSSetup /> ;
      case "subscription": return <SubscriptionSettings/>;
      case "payment": return <PaymentGateway/>;
      case "documents": return <Documents/>;
      case "features": return <ConfigureFeatures />;

      case "security": return <SecurityTokens />;

      case "misc": return <Miscellaneous />;
      case "notice": return <NoticeBoardSetting />; 
      case "whatsapp": return <WhatsAppAPI />; 




      

      default: return <PlaceholderTab label={tabs.find(t => t.id === activeTab)?.label || ""} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-8">
        <div className="mb-5 sm:mb-6">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">Settings</h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-0.5">Configure system settings and preferences</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
          <div className="sm:hidden">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm text-gray-700 w-full justify-between shadow-sm"
            >
              <span className="flex items-center gap-2">
                {tabs.find(t => t.id === activeTab)?.icon}
                {tabs.find(t => t.id === activeTab)?.label}
              </span>
              <span className="text-gray-400">{sidebarOpen ? "▲" : "▼"}</span>
            </button>
            {sidebarOpen && (
              <div className="mt-1 bg-white border border-gray-200 rounded-xl shadow-lg z-10 overflow-hidden">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors border-b border-gray-50 last:border-0 ${activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                  >
                    <span className={activeTab === tab.id ? "text-white" : "text-gray-400"}>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="hidden sm:block w-48 md:w-52 flex-shrink-0">
            <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-2.5 px-4 py-3 text-xs md:text-sm text-left transition-colors border-b border-gray-50 last:border-0 ${activeTab === tab.id ? "bg-teal-500 text-white" : "text-gray-600 hover:bg-gray-50"}`}
                >
                  <span className={`flex-shrink-0 ${activeTab === tab.id ? "text-white" : "text-gray-400"}`}>{tab.icon}</span>
                  <span className="truncate">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="flex-1 bg-white rounded-xl border border-gray-200 shadow-sm min-h-64 overflow-hidden">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
}






