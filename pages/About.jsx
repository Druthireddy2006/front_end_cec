const About = () => (
 <section className="about-section">
   <h2>About NorthSpice</h2>
   <p>
     This warm and aromatic mixture typically includes ground spices such as cumin, coriander, black pepper, cardamom, cloves, cinnamon, and sometimes nutmeg or fennel seeds
   </p>


   <div className="team-grid">
     {["Marketing Team", "Sales Team", "Delivery Team"].map((team) => (
       <div key={team} className="team-card">
         <h3>{team}</h3>
         <p>
           Dedicated professionals ensuring smooth operations across North India.
         </p>
       </div>
     ))}
   </div>
 </section>
);


export default About;
