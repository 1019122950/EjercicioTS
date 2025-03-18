//Es una clase genérica que permite manejar cualquier tipo de datos (agregar, buscar, eliminar).

export class Repository<T extends { id: number }> {
    private items: T[] = [];
  
    add(item: T): void {  //Agregar un elemento
      this.items.push(item);
    }
  
    getAll(): T[] {  //Obtener todos los elementos
      return this.items;
    }
  
    findById(id: number): T | null {   //Buscar por ID
      return this.items.find(item => item.id === id) || null;
    }
  
    deleteById(id: number): void {   //Eliminar por ID
      this.items = this.items.filter(item => item.id !== id);
    }
  }
  