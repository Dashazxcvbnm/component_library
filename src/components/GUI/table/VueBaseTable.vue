<template>
    <div>
        <div class="table-wrapper">
            <table :class="[{'table__layout-fixed': fixedLayout}, 'table']">

                <thead class="table-head">
                    <tr>

                        <th v-for="(column, index) in columns" :key="index"
                        class="table-head_column">
                        {{ column }}</th>

                    </tr>
                </thead>

                <tbody class="table-body" v-if="data">
                    
                    <tr v-for="(row, index) in data" :key="index"
                    :id="index"
                    :class="[{'table-body_row__hover-color' : onRow},
                    {'table-body_row__hover' : onRow}, 'table-body_row']"
                    @click="onRow ? $emit('clickEventForRow', index) : null"
                    @mouseenter="withRowMouseEnterEvent ? $emit('mouseenterEventForRow') : null">

                        <td v-for="value in row" :key="value.name"
                        :class="[{'table-body_column__hover-color' : onColumn},
                        {'table-body_cell__hover-color' : onCell},
                        {'table-body_cell' : onCell}, 'table-body_column']"
                        @click="onCell ? $emit('clickEventForCell', { rowIndex: index, value: value }) : null, onColumn ? $emit('clickEventForColumn', {rowIndex: index, value: value}) : null">

                        <span v-if="value">{{ value }}</span>
                        <div v-else class="table-body_loader"></div>
                        </td>

                    </tr>
                    
                </tbody>

                <tbody class="table-body" v-else>
                    
                    <tr>
                    <td class="table_empty-message__text" :colspan="columns.length">{{ emptyMessage }}</td>
                    </tr>
                    
                </tbody>

            </table>
        </div>
    </div>
</template>

<script setup>
defineProps({
  columns: {
    type: Array,
    required: true
  },

  data: {
    type: Array
  },

  emptyMessage: {
    type: String,
    default: 'Данные отсутствуют'
  },

  fixedLayout: {
    type: Boolean,
    default: false
  },

  isLoading: {
    type: Boolean,
    default: false
  },

  onColumn: {
    type: Boolean,
    default: false
  },

  onRow: {
    type: Boolean,
    default: false
  },

  onCell: {
    type: Boolean,
    default: false
  },

  withRowMouseEnterEvent: {
    type: Boolean,
    default: false
  }
})
defineEmits(['clickEventForRow', 'clickEventForColumn', 'clickEventForCell', 'mouseenterEventForRow'])
</script>

<style scoped lang="scss">
.table {
    border-spacing: 0;
    text-align: left;
    width: 100%;
    
    &__layout-fixed {
        table-layout: fixed;
    }

    &-wrapper {
        overflow-x: auto;
    }

    &-head {
        font-family: $table-head-font;
        font-size: 14px;
        line-height: 25px;
        height: 30px;
        background-color: $dark-grey;
        color: $basic-white;

        &_column {
            font-weight: 400;
            padding: 0 15px 0 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

    }

    &-body {
        font-family: $table-body-font;
        font-size: 14px;
        line-height: 28px;

        &_row {
            height: 35px;

            &__hover:active {
                cursor: grabbing;
            }

            &__hover {
                cursor: grab;

                &-color:hover .table-body_column {
                background-color: $light-red;
            }
        }
        }

        &_column {
            font-weight: 400;
            padding: 0 15px 0 15px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
        }

        &_cell {
            cursor: pointer;

            &__hover-color:hover {
                background-color: $light-red;
            }
        }

        &_loader {
            width: 100%;
            height: 10px; 
            cursor: progress; 
            background: 
                linear-gradient(0.25turn, transparent, $basic-white, transparent),
                linear-gradient(#dae0e7, $basic-white);
            background-repeat: no-repeat;
            background-size: 315px 250px, 315px 180px, 100px 100px, 225px 30px; 
            background-position: -315px 0, 0 0, 0px 190px, 50px 195px; 
            animation: loading 1.5s infinite; 
        }

        @keyframes loading {  
            to {
                background-position: 315px 0, 0 0, 0 190px, 50px 195px;
            }
        }
    }

    &-body .table-body_row:nth-child(odd) {
        background-color: $light-blue;
    }

    &-body_row .table-body_column:first-child {
        border-left: 1px solid $basic-grey;
    }

    &-body_row .table-body_column:last-child {
        border-right: 1px solid $basic-grey;
    }

    &-body_row:last-child .table-body_column {
        border-bottom: 1px solid $basic-grey;
    }

    &_empty-message__text {
        text-align: center;
        font-size: 18px;
    }

}
</style>