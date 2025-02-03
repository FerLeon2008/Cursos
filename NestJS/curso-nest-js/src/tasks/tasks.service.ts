import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class TasksService {

    private tasks: any[] = [];

    getTasks() {
        return ['Task 1', 'Task 2', 'Task 3'];
    }

    getTask(id: number) {
        const taskFound = this.tasks.find(task => task.id === id);

        return taskFound ? taskFound : new NotFoundException(`Task with id ${id} not found`);
    }
    
    createTask(task: any) {
        console.log(task);
        this.tasks.push({
            id: this.tasks.length + 1,
            ...task
        });
        return {task};
    }

    updateTask() {
        return 'Actualizando tareas';
    }

    deleteTask() {
        return 'Eliminando tarea';
    }

    updateTaskStatus() {
        return 'Actualizando estado de la tarea';
    }
}
