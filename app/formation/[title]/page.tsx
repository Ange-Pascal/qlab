import React from "react";

function FormationItemPage({ params }: { params: { title: string } }) {
  return (
    <div className="py-20">
      <h1> ID: {params.title}</h1>
    </div>
  );
}

export default FormationItemPage;
