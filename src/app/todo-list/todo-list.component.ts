import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent  {
    title = 'TODO LIST';
    todos = [
      {title : 'good', priority: 1 , editing :  false, dueDate : Date.now()},
      {title : 'hello', priority: 1 , editing :  false, dueDate : Date.now()}
    ];
    favorites = [];
    addTodo = (item) => {
      item.title += ' ' + (this.todos.length + 1);
      item.dueDate = Date.now();
      this.todos.push(item);
    }
    deleteTodo(todos, item) {
      const index = todos.indexOf(item);
      return todos.splice(index, 1);
    }
    makeFavorite(doc) {
      const removed = this.deleteTodo(this.todos, doc);
      this.favorites.push(removed[0]);
    }
    makeUnfavorite(todo) {
      const removed = this.deleteTodo(this.favorites, todo);
      this.todos.push(removed[0]);
    }

    updatePriority(doc , byNumber) {
      doc.priority += byNumber;
      this.todos.sort((a, b) => a.priority - b.priority);
    }
    isEditing(todo) {
      todo.editing = true;
    }
}
