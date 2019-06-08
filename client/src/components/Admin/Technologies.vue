<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
          <v-data-table
            :headers="headers"
            :items="technologies"
            class="elevation-1"
          >
            <template v-slot:items="props">
              <td>{{ props.item.name }}</td>
              <td class="text-xs-right">
                <v-btn color="primary" dark>редактировать</v-btn>
              </td>
              <td class="text-xs-right">
                <v-btn color="pink" dark>удалить</v-btn>
              </td>
            </template>
          </v-data-table>

      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      dialog: false,
      headers: [
        {
          text: 'Технологии',
          align: 'left',
          sortable: false,
          value: 'name'
        }
      ],
      technologies: [
        {
          name: 'Frozen Yogurt'
        },
        {
          name: 'Ice cream sandwich'
        },
        {
          name: 'Eclair'
        },
        {
          name: 'Cupcake'
        },
        {
          name: 'Gingerbread'
        },
        {
          name: 'Jelly bean'
        },
        {
          name: 'Lollipop'
        },
        {
          name: 'Honeycomb'
        },
        {
          name: 'Donut'
        },
        {
          name: 'KitKat'
        }
      ]
    }
  }
}
</script>
