import React, { useState } from "react";
import "./App.css";

const initialForm = {
  rate24Carat: "",
  purity: "",
  weight: "",
  makingCharges: "",
};

function App() {
  const [form, setForm] = useState(initialForm);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/calculate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rate24Carat: parseFloat(form.rate24Carat),
          purity: parseFloat(form.purity),
          weight: parseFloat(form.weight),
          makingCharges: parseFloat(form.makingCharges),
        }),
      });

      if (!res.ok) throw new Error("Server error. Please try again.");
      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm(initialForm);
    setResult(null);
    setError("");
  };

  return (
    <div className="app">
      {/* Background decoration */}
      <div className="bg-ornament bg-ornament-1" />
      <div className="bg-ornament bg-ornament-2" />

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="logo-mark">✦</div>
          <h1 className="title">Abhishek Jewellers<br /><span>Bill Calculator</span></h1>
          <p className="subtitle">Pure gold pricing · Transparent billing</p>
        </header>

        {/* Form Card */}
        <form className="card" onSubmit={handleSubmit}>
          <div className="section-label">Ornament Details</div>

          <div className="fields">
            <div className="field">
              <label>24 Carat Gold Rate <span className="unit">(₹ / 1g)</span></label>
              <div className="input-wrap">
                <span className="prefix">₹</span>
                <input
                  type="number"
                  name="rate24Carat"
                  value={form.rate24Carat}
                  onChange={handleChange}
                  placeholder="e.g. 72000"
                  min="0"
                  step="any"
                  required
                />
              </div>
            </div>

            <div className="field">
              <label>Ornament Purity <span className="unit">(%)</span></label>
              <div className="input-wrap">
                <select
                    name="purity"
                    value={form.purity}
                    onChange={handleChange}
                    required
                >
                  <option value="">Select Purity</option>
                  <option value="100">24K </option>
                  <option value="91.6">22K </option>
                  <option value="77">18K  </option>
                  {/*<option value="58.5">14K </option>*/}
                  {/*<option value="41.7">10K</option>*/}
                </select>
              </div>
              <div className="hint">24K = 100% · 22K = 91.6% ·20K = 83.33% · 18K = 76% ·</div>
            </div>

            <div className="field">
              <label>Weight <span className="unit">(grams)</span></label>
              <div className="input-wrap">
                <input
                  type="number"
                  name="weight"
                  value={form.weight}
                  onChange={handleChange}
                  placeholder="e.g. 10.5"
                  min="0"
                  step="any"
                  required
                />
                <span className="suffix">g</span>
              </div>
            </div>

            <div className="field">
              <label>Making Charges <span className="unit">(%)</span></label>
              <div className="input-wrap">
                <input
                  type="number"
                  name="makingCharges"
                  value={form.makingCharges}
                  onChange={handleChange}
                  placeholder="e.g. 12"
                  min="0"
                  step="any"
                  required
                />
                <span className="suffix">%</span>
              </div>
            </div>
          </div>

          {error && <div className="error-msg">⚠ {error}</div>}

          <div className="actions">
            <button type="submit" className="btn-primary" disabled={loading}>
              {loading ? <span className="spinner" /> : "Calculate Bill"}
            </button>
            <button type="button" className="btn-secondary" onClick={handleReset}>
              Reset
            </button>
          </div>
        </form>

        {/* Result Card */}
        {result && (
          <div className="result-card">
            <div className="result-header">
              <span className="result-icon">✦</span>
              <span>Bill Summary</span>
            </div>

            <div className="breakdown">
              <div className="breakdown-row">
                <span>Rate per gram</span>
                <span>₹ {result.ratePerGram.toLocaleString("en-IN")}</span>
              </div>
              <div className="breakdown-row">
                <span>Base amount ({result.weight}g)</span>
                <span>₹ {result.baseAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="breakdown-row">
                <span>Making charges</span>
                <span>₹ {result.makingChargesAmount.toLocaleString("en-IN")}</span>
              </div>
              <div className="breakdown-divider" />
              <div className="breakdown-row total">
                <span>Total Bill</span>
                <span>₹ {result.totalBill.toLocaleString("en-IN")}</span>
              </div>
            </div>
          </div>
        )}

        <footer className="footer">
          Prices are indicative · @Copyrights goes to Aniket Khune
        </footer>
      </div>
    </div>
  );
}

export default App;
