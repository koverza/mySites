export function spoiler() {
    console.log('spoiler works');
    const accordions = document.querySelectorAll(".accordion");
    accordions.forEach(accordion => {
      const titles = accordion.querySelectorAll(".accordion__title");
      const contents = accordion.querySelectorAll(".accordion__content");
      const icons = accordion.querySelectorAll(".accordion__icon");
    
      titles.forEach((title) => {
        title.addEventListener("click", () => {
          const titleAttr = title.getAttribute("data-number");
          contents.forEach((content) => {
            const contentAttr = content.getAttribute("data-number");
            if (titleAttr === contentAttr) {
              content.classList.toggle("active");
              icons.forEach(icon => {
                const iconAttr = icon.getAttribute("data-number");
                if(iconAttr === contentAttr) {
                  icon.classList.toggle("active")
                } else {
                  icon.classList.remove("active")
                }
              })
            } else {
              content.classList.remove("active");
            }
          });
        });
      });
    })
}
