const grades = [
  { subject: "Economics", grade: 95 },
  { subject: "Physics", grade: 88 },
  { subject: "Maths", grade: 92 },
  { subject: "Digital logic", grade: 85 },
  { subject: "Hardware", grade: 90 },
  { subject: "C programming", grade: 91 }

];

const tbody = document.querySelector('#grades-table tbody');

grades.forEach(({subject, grade}) => {
  const tr = document.createElement('tr');

  const tdSubject = document.createElement('td');
  tdSubject.textContent = subject;
  tr.appendChild(tdSubject);

  const tdGrade = document.createElement('td');
  tdGrade.textContent = grade;
  tr.appendChild(tdGrade);

  tbody.appendChild(tr);
});
