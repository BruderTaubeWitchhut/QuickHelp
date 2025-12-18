const data = [];

const list = document.getElementById("list");
const search = document.getElementById("search");
const filter = document.getElementById("filter");
const form = document.getElementById("addForm");
const titleInput = document.getElementById("title");
const categoryInput = document.getElementById("category");

function render(items) {
  list.innerHTML = "";
  if (items.length === 0) {
    const li = document.createElement("li");
    li.textContent = "No help listed yet";
    list.appendChild(li);
    return;
  }

  items.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item.title + " — " + item.category;
    list.appendChild(li);
  });
}

function update() {
  const text = search.value.toLowerCase();
  const category = filter.value;

  const filtered = data.filter(item => {
    const matchText = item.title.toLowerCase().includes(text);
    const matchCategory = category === "" || item.category === category;
    return matchText && matchCategory;
  });

  render(filtered);
}

search.addEventListener("input", update);
filter.addEventListener("change", update);

form.addEventListener("submit", e => {
  e.preventDefault();
  data.unshift({
    title: titleInput.value,
    category: categoryInput.value
  });
  form.reset();
  update();
});

render(data);
