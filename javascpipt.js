// Пример структуры данных для вакансии
const jobListing = {
  id: 1,
  title: "Строитель-отделочник",
  description: "Работа на объектах в Германии...",
  country: "Германия",
  city: "Берлин",
  salary: 2600, // EUR
  requirements: ["Опыт работы от 2 лет", "Базовый немецкий/английский"],
  employer: {
    id: 1,
    name: "Construction GmbH",
    verified: true // Проверенный работодатель
  },
  documentsRequired: ["Разрешение на работу", "Визу D"],
  created_at: "2025-09-07",
  expires_at: "2025-10-07"
};

// Пример функции поиска вакансий
function searchJobs(filters) {
  const { query, country, minSalary, maxSalary, profession } = filters;
  
  // Здесь будет обращение к базе данных
  return db.jobs.filter(job => {
    return (
      (!query || job.title.includes(query) || job.description.includes(query)) &&
      (!country || job.country === country) &&
      (!minSalary || job.salary >= minSalary) &&
      (!maxSalary || job.salary <= maxSalary) &&
      (!profession || job.profession === profession)
    );
  });
}
