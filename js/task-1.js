function slugify(title) {
  let slug = title.toLowerCase().replaceAll(" ", "-");
  return slug;
}

slugify("Arrays for begginers");
slugify("English for developer");
slugify("Ten secrets of JavaScript");
slugify("How to become a JUNIOR developer in TWO WEEKS");
