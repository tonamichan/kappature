<template>
    <div>ここにタスクリストを出すよ～</div>
    <ul id="example-1">
      <li v-for="tasks in task" :key="task.id">
        {{ task.id }}: {{ task.name }}
      </li>
    </ul>
  </template>
  
  <script>
  module.exports = {
    data() {
      return {
        tasks: [
          {id: 1, name: 'されわもってこい', who: 'せらぴ', parent: []},
          {id: 2, name: 'すかぶたおせ', who: 'ぷらぱ', parent: []},
        ]
      }
    },
  }
  </script>
  