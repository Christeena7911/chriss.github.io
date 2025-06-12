const monthSelect = document.getElementById('month-select');
const yearSelect = document.getElementById('year-select');
const calendarBody = document.querySelector('#calendar tbody');
const selectedDateDisplay = document.getElementById('selected-date');
const reminderInput = document.getElementById('reminder-input');
const saveButton = document.getElementById('save-reminder');
const reminderOutput = document.getElementById('reminder-output');

const reminders = {}; // Stores reminders in memory

let selectedDate = null;

// Populate month and year dropdowns
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

months.forEach((month, index) => {
  const option = document.createElement('option');
  option.value = index;
  option.textContent = month;
  monthSelect.appendChild(option);
});

for (let year = 2000; year <= 2100; year++) {
  const option = document.createElement('option');
  option.value = year;
  option.textContent = year;
  yearSelect.appendChild(option);
}

// Show calendar for selected month/year
function generateCalendar(month, year) {
  calendarBody.innerHTML = '';
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  let date = 1;

  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');
      if (i === 0 && j < firstDay) {
        cell.innerHTML = '';
      } else if (date > daysInMonth) {
        break;
      } else {
        cell.textContent = date;
        cell.addEventListener('click', () => selectDate(date, month, year));
        if (selectedDate && selectedDate.date === date &&
            selectedDate.month === month && selectedDate.year === year) {
          cell.classList.add('selected');
        }
        date++;
      }
      row.appendChild(cell);
    }
    calendarBody.appendChild(row);
  }
}

// Select a date and show existing reminder
function selectDate(day, month, year) {
  selectedDate = { date: day, month, year };
  document.querySelectorAll('td').forEach(td => td.classList.remove('selected'));
  generateCalendar(month, year); // Re-render with selection
  selectedDateDisplay.textContent = `Reminder for ${day} ${months[month]} ${year}`;
  const key = `${year}-${month}-${day}`;
  reminderInput.value = reminders[key] || '';
  reminderOutput.textContent = reminders[key] ? `Saved: ${reminders[key]}` : '';
}

// Save reminder
saveButton.addEventListener('click', () => {
  if (!selectedDate) return alert('Please select a date first.');
  const key = `${selectedDate.year}-${selectedDate.month}-${selectedDate.date}`;
  const text = reminderInput.value.trim();
  if (text) {
    reminders[key] = text;
    reminderOutput.textContent = `Saved: ${text}`;
  } else {
    delete reminders[key];
    reminderOutput.textContent = 'Reminder cleared.';
  }
});

// Initial load
const today = new Date();
monthSelect.value = today.getMonth();
yearSelect.value = today.getFullYear();
generateCalendar(today.getMonth(), today.getFullYear());

monthSelect.addEventListener('change', () => {
  generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
});
yearSelect.addEventListener('change', () => {
  generateCalendar(parseInt(monthSelect.value), parseInt(yearSelect.value));
});
