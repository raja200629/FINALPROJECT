import React, { useMemo, useState } from "react";
import { useFunds } from "../context/FundContext.jsx";
import FundCard from "../components/FundCard.jsx";
import Loader from "../components/Loader.jsx";

export default function Funds() {
  const { funds, loading, error, watchlist, toggleWatch } = useFunds();
  const [q, setQ] = useState("");
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(funds.map((f) => f.category)))],
    [funds]
  );
  const [cat, setCat] = useState("All");

  const filtered = funds.filter(
    (f) =>
      (cat === "All" || f.category === cat) &&
      (q === "" || f.name.toLowerCase().includes(q.toLowerCase()))
  );

  if (loading) return <Loader />;
  if (error) return <div className="card">Error: {error}</div>;

  return (
    <div>
      <div className="card" style={{ marginBottom: 12 }}>
        <div
          className="flex"
          style={{
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          <input
            placeholder="Search funds..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ccc",
              flex: 1,
              minWidth: "200px",
            }}
          />

          <select
            value={cat}
            onChange={(e) => setCat(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: 6,
              border: "1px solid #ccc",
              background: "#fff",
              minWidth: "150px",
            }}
          >
            {categories.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div
        className="grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {filtered.length === 0 ? (
          <div className="card" style={{ gridColumn: "1/-1", textAlign: "center" }}>
            No matching funds found.
          </div>
        ) : (
          filtered.map((fund) => (
            <FundCard
              key={fund.id}
              fund={fund}
              isWatched={watchlist.includes(fund.id)}
              toggleWatch={toggleWatch}
            />
          ))
        )}
      </div>
    </div>
  );
}
