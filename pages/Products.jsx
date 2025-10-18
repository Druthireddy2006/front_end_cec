const spices = [
  { name: "Mace", img: "https://media.istockphoto.com/id/184137525/photo/mace-spice-indian-cuisine.jpg?s=1024x1024&w=is&k=20&c=jgEieyBy_cMxmkQplDkQbQQjHr22E08Rb6vuk-uEYaI=" },
  { name: "Saffron", img: "https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSNppP6-P1lBOCoQFGszayV37HiZrWa1FHtiueJTx53Dc0UjCs5LieLuRJ-MZoX7zYz" },
  { name: "Ajwain", img: "https://media.istockphoto.com/id/1300845305/photo/ajwain-thymol-or-carom-seeds.jpg?s=2048x2048&w=is&k=20&c=4iA7YAxQXo753gMNJcOlav4jY3b4eBgoj2yHvhJmO1M=" },
  { name: "Black cardamom", img: "https://cdn.qvm.com.au/wp-content/uploads/2025/04/black-cardamom-600x600.jpg" },
];

const Products = () => {
  return (
    <section className="products-section">
      <h2>Our Wholesale Products</h2>

      {/* 🎥 YouTube Video Embed */}
      <div className="video-container">
       <iframe width="1296" height="729" src="https://www.youtube.com/embed/J_Li59uiYgE" title="Top Indian Spices" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" ></iframe>
      </div>

      {/* 🌿 Product Grid */}
      <div className="products-grid">
        {spices.map((spice) => (
          <div key={spice.name} className="product-card">
            <img src={spice.img} alt={spice.name} />
            <h3>{spice.name}</h3>
            <p>Pure and fresh spices directly from the source.</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
