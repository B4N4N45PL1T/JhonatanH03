//Prueba mmg
class Tarea {
    constructor(public titulo: string, public completa: boolean) {}
  }
  const listaDeTareas: Tarea[] = [
    new Tarea("Ir a la Universidad", false),
    new Tarea("Sacar la basura", true),
    new Tarea("Estudiar TypeScript", false),
  ];
  console.log("Lista de tareas:");
  for (const tarea of listaDeTareas) {
    const estado = tarea.completa ? "Completa" : "Pendiente";
    console.log(` ${tarea.titulo} - ${estado}`);
  }
