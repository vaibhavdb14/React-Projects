import "../styles/plant.css";

const Plant = () => {
  // 🔹 Array of plant objects
  const plants = [
    {
      id: 1,
      name: "Tulip",
      image:
        "https://images.unsplash.com/photo-1668126562086-c7c38fcdd77b?w=400&auto=format&fit=crop&q=60",
      description:
        "Tulips are beautiful flowering plants known for their bright colors and elegant shape. They symbolize love and renewal and are widely grown in gardens. Tulips thrive in well-drained soil and require moderate sunlight for healthy growth.",
    },
    {
      id: 2,
      name: "Aloe Vera",
      image:
        "https://images.unsplash.com/photo-1569745358610-b01866003860?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QWxvZSUyMFZlcmF8ZW58MHx8MHx8fDA%3D",
      description:
        "Aloe Vera is a medicinal plant widely valued for its healing and soothing properties. It improves skin health, boosts immunity, aids digestion, and helps purify indoor air. Aloe Vera is easy to maintain, requires minimal watering, and grows well in indirect sunlight.",
    },

    {
      id: 3,
      name: "Peace Lily",
      image:
        "https://images.unsplash.com/photo-1706944590915-120cf3bf7ccd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFBlYWNlJTIwTGlseXxlbnwwfHwwfHx8MA%3D%3D",
      description:
        "Peace Lily is an elegant flowering plant admired for its white blooms and glossy green leaves. It enhances indoor beauty, reduces airborne toxins, and creates a calm atmosphere. Peace Lilies grow well in low light and need moderate watering, making them perfect for indoor spaces.",
    },

    {
      id: 4,
      name: "Lavender",
      image:
        "https://plus.unsplash.com/premium_photo-1673728254015-9a437bdb44aa?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TGF2ZW5kZXJ8ZW58MHx8MHx8fDA%3D",
      description:
        "Lavender is a fragrant flowering plant known for its soothing aroma and calming effect. It helps reduce stress, improves sleep quality, and attracts beneficial pollinators. Lavender grows best in sunlight and well-drained soil, adding beauty and freshness to gardens and balconies.",
    },
  ];

  return (
    <main className="plant-container">
      {plants.map((plant) => (
        <div className="plant-card" key={plant.id}>
          <img src={plant.image} alt={plant.name} className="plant-image" />

          <h3 className="plant-name">{plant.name}</h3>

          <p className="plant-text">{plant.description}</p>

          <button className="buy-btn">Buy Plant</button>
        </div>
      ))}
    </main>
  );
};

export default Plant;
