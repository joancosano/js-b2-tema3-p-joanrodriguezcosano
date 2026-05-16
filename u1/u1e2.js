// T3. JavaScript profesional en una aplicación web
// U1. Trabajo avanzado con el DOM
// Enunciado disponible en u1e2.md / Enunciat disponible a u1e2.md

const CATEGORY_LIST = [
    {
        id: 1,
        name: 'design'
    }, {
        id: 2,
        name: 'development'
    }, {
        id: 3,
        name: 'consultancy'
    }
];

const PROJECT_LIST = [
    {
        id: 1,
        name: 'First Project',
        excerpt: 'Lorem <strong>ipsum</strong> dolor quan aemet...',
        categoryId: 2,
        progress: 90,
        archived: false,
        search: ['wordA', 'wordB', 'wordC'],
        tags: ['tag1', 'tag2']
    }, {
        id: 2,
        name: 'Second Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 2,
        progress: 50,
        archived: false,
        search: ['wordA', 'wordD'],
        tags: ['tag3']
    }, {
        id: 3,
        name: 'Third Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 1,
        progress: 20,
        archived: false,
        search: ['wordB', 'wordC'],
        tags: ['tag1', 'tag3']
    }, {
        id: 4,
        name: 'Fourth Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 3,
        progress: 100,
        archived: true,
        search: ['wordA', 'wordB'],
        tags: ['tag2']
    }, {
        id: 5,
        name: 'Fifth Project',
        excerpt: 'Lorem ipsum dolor quan aemet...',
        categoryId: 3,
        progress: 100,
        archived: false,
        search: ['wordA', 'wordC', 'wordD'],
        tags: ['tag1', 'tag2', 'tag3']
    }, {
        id: 6,
        name: 'Sixth Project',
        excerpt: 'Lorem ipsum <strong>dolor quan</strong> aemet...',
        categoryId: 2,
        progress: 100,
        archived: true,
        search: ['wordA', 'wordB', 'wordD'],
        tags: ['tag1']
    },
];

//Escribe aquí tu solución / escriviu aquí la vostra solució:

function renderProjects(PROJECT_LIST){

    const projectList = document.querySelector(".js-project-list");
    const fragment = document.createDocumentFragment();

    PROJECT_LIST.forEach(project => {

        const template = document.querySelector("#tpl-project");
        const clone = template.content.cloneNode(true);
        const projectNode = clone.querySelector(".js-project");
        projectNode.dataset.id = project.id;
        projectNode.dataset.tags = project.tags.join(",");
        projectNode.dataset.search = project.search.join(",");
        projectNode.dataset.archived = project.archived;
        clone.querySelector(".js-name").textContent = project.name;
        clone.querySelector(".js-progress").textContent =project.progress;
        clone.querySelector(".js-excerpt").innerHTML = project.excerpt;

        const category = CATEGORY_LIST.find(
            category => category.id === project.categoryId
        );

        clone.querySelector(".js-category").textContent =category.name;

        if (project.archived){
            projectNode.classList.add("archived")
        }

        if (project.progress === 100){
            projectNode.classList.add("completed")
        }

        const tagsContainer = clone.querySelector(".js-tags");

        project.tags.forEach((tag =>{
             const tagTemplate = document.querySelector("#tpl-tag");
             const tagClone = tagTemplate.content.cloneNode(true);
             const taglink = tagClone.querySelector(".js-tag-link");
             taglink.dataset.tag=tag;
             taglink.textContent=tag;
             tagsContainer.append(tagClone);
        }));

        fragment.append(clone);

    });
    projectList.append(fragment); 

}

renderProjects(PROJECT_LIST);
