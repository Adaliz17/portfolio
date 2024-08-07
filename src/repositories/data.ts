import { images, projectImages } from "../assets/images/images";

export const portfolioInfo = [
    {
        title: 'Portfolio',
        description: 'Este un proyecto hecho con react, vite, typescript y otras tegnologias, realizado con el fin de mostrar proyecto en los que he trabajado y tegnologias de las que tengo conocimiento, a parte de una breve descripcion sobre mi.',
        images: [images.react, images.typescript, images.git],
        git: 'portfolio',
        technologies: ['react', 'typescript', 'git'],
    },
    {
        title: 'App Loto',
        description: 'Este un proyecto hecho con flutter en su versión móvil, diseñada para la venta y manejo de un servicio de rifas. La app lleva un registro de ventas ganador, todo separado por usuarios. También ofrece un sistema de reportes bastante completo.',
        images: [projectImages.rifas1, projectImages.rifas2, projectImages.rifas3],
        git: '',
        technologies: ['flutter', 'git'],
    }
]