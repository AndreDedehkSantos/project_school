<template>
  <div>
    <titulo texto="Professores"/>
    <table>
      <thead>
        <th>Cód.</th>
        <th>Nome</th>
        <th>Alunos</th>
      </thead>
      <tbody v-if="professores.length">
        <tr v-for="(professor, index) in professores" :key="index">
            <td>{{professor.id}}</td>
            <router-link to="/Alunos" tag="td" style="cursor: pointer;">
                {{professor.nome}} {{professor.sobrenome}}
            </router-link>
            <td>
                3
            </td>
        </tr>
      </tbody>
      <tfoot v-else>
        Nenhum Aluno Encontrado
      </tfoot>
    </table>
  </div>
</template>

<script>

    import Titulo from '../_share/Titulo'
    export default {
        components:{
            Titulo
        },
        data() {
            return {
                professores:[
                    {id: 1, nome: 'Vinicius'},
                    {id: 2, nome: 'Paula'},
                    {id: 3, nome: 'Luna'},
                ]
            }
        },
    };
</script>

<style lang="scss" scoped>
</style>