import BoxI from "./BoxI";

const Section2 = () => {
  const steps = [
    { id: 1, bgColor: "bg-teal-600", title: "Boost Your Career with", company: "KODE VORTEX" },
    { id: 2, bgColor: "bg-indigo-800", title: "Boost Your Career with", company: "KODE VORTEX" },
    { id: 3, bgColor: "bg-teal-600", title: "Boost Your Career with", company: "KODE VORTEX" },
  ];

  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="grid grid-cols-1 gap-12">
        {steps.map((step) => (
          <BoxI key={step.id} {...step} color="#056777" align="left" textalign="right" />
        ))}
      </div>
    </section>
  );

}

export default Section2