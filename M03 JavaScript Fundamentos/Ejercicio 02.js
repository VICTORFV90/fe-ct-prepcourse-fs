/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
   // Debe retornar un string.
   // Tu código:
   return string;
}

// ⛔️ "X" e "Y" son números.

function suma(x, y) {
   // Retorna el resultado de su suma.
   // Tu código:
   var z;
   z = x + y;
   return z;
}

function resta(x, y) {
   // Retorna el resultado de la resta.
   // Tu código:
   var c;
   c = x - y;
   return c;

}

function divide(x, y) {
   // Retorna el resultado de su división.
   // Tu código:
   var a;
   a = x / y;
   return a;

}

function multiplica(x, y) {
   // Retorna el resultado de su multiplicación.
   // Tu código:
   var b;
   b = x * y;
   return b;
}

function obtenerResto(x, y) {
   // Obten el resto de la división de "x" entre "y".
   // Tu código:
   var d;
   d = x % y;
   return d;

}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverString,
   suma,
   resta,
   divide,
   multiplica,
   obtenerResto,
};
