const people = [
    {
      name: "Aixa",
      position: "Internal",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 6,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Ruben",
      position: "Internal",
      fullPayment: "Completed",
      paymentDate: "16/12/2024",
      amount: 6,
      currency: "PEN",
      gender: "Male",
      icon: "\u2642"
    },
    {
      name: "Shantall",
      position: "Analyst",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 8,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Marialicia",
      position: "Analyst",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 8,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Roberto",
      position: "Analyst",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 8,
      currency: "PEN",
      gender: "Male",
      icon: "\u2642"
    },
    {
      name: "Kevin",
      position: "Agile Team Facilitator",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 11,
      currency: "PEN",
      gender: "Male",
      icon: "\u2642"
    },
    {
      name: "Hercilia",
      position: "Leader",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 11,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Fabiola",
      position: "Leader",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 11,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Sheyla",
      position: "Leader",
      fullPayment: "Completed",
      paymentDate: "10/12/2024",
      amount: 11,
      currency: "PEN",
      gender: "Female",
      icon: "\u2640"
    },
    {
      name: "Oswaldo",
      position: "Manager",
      fullPayment: "Pending",
      paymentDate: null,
      amount: 20,
      currency: "PEN",
      gender: "Male",
      icon: "\u2642"
    }
  ];
  
  const gridContainer = document.querySelector('.grid');
  
  people.forEach((person) => {
    const card = document.createElement('div');
    card.classList.add('card');
    if (person.fullPayment === 'Completed') {
      card.classList.add('completed');
    }
  
    card.innerHTML = `
      <div class="card-header">
        <h2>${person.name}</h2>
        <span>${person.icon}</span>
      </div>
      <div class="card-details">
        <p><strong>Position:</strong> ${person.position}</p>
        <p><strong>Payment Status:</strong> ${person.fullPayment}</p>
        ${person.paymentDate ? `<p><strong>Payment Date:</strong> ${person.paymentDate}</p>` : ''}
        <p><strong>Amount:</strong> ${person.amount} ${person.currency}</p>
      </div>
    `;
  
    gridContainer.appendChild(card);
  });
  
