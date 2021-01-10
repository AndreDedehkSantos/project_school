import Vue from 'vue';
import Router from 'vue-router';
import Alunos from './components/Aluno/Alunos';
import Professores from "./components/Professor/Professor";
import Sobre from './components/Sobre/Sobre';

Vue.use(Router);

export default new Router({
    routes: [{
            path: '/Professores',
            nome: 'Professores',
            component: Professores
        },
        {
            path: '/Alunos',
            nome: 'Alunos',
            component: Alunos
        },
        {
            path: '/Sobre',
            nome: 'Sobre',
            component: Sobre
        }
    ]
})