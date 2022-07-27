import accountant from '../types';

function counter(): accountant {
	let count: number = 0;
	return (): number => {
		count += 1;
		return count;
	};
}

/**
 * * Composición interna
 * Los datos en la memoria caché se alojan en distintos niveles según la frecuencia de uso que tengan. La información puede transferirse entre los distintos niveles de forma inclusiva o exclusiva:
 *
 * ? Caché inclusivo: los datos solicitados se quedan en la memoria caché de procedencia, es decir, se mantiene una copia en dos o más niveles.
 *
 * ? Caché exclusivo: los datos solicitados se eliminan de la memoria caché de procedencia una vez transferidos al nuevo nivel.
 *
 * TODO Memoria caché nivel 1 (Caché L1)
 * También llamada memoria interna, se encuentra en el núcleo del microprocesador. Se utiliza para almacenar y acceder a datos e instrucciones importantes y de uso frecuente, agilizando los procesos, al ser el nivel que ofrece un tiempo de respuesta menor. Se divide en dos subniveles:
 *
 * ? Nivel 1 Data Cache: se encarga de almacenar datos usados frecuentemente.
 *
 * ? Nivel 1 Instruction Cache: se encarga de almacenar instrucciones usadas frecuentemente.
 *
 * TODO Memoria caché nivel 2 (Caché L2)
 * Se encarga de almacenar datos de uso frecuente, es mayor que la caché L1, pero a costa de ser más lenta. Aun así, es más rápida que la memoria principal (RAM). Puede ser inclusiva y contener una copia del nivel 1, además de información extra o exclusiva, y que su contenido sea totalmente diferente de la cache L1, proporcionando así mayor capacidad total.
 *
 * TODO Memoria caché nivel 3 (Caché L3)
 * Es más rápida que la memoria principal (RAM), pero más lenta y mayor que L2, ayuda a que el sistema guarde gran cantidad de información, agilizando las tareas del procesador. En esta memoria se agiliza el acceso a datos e instrucciones que no se localizaron en L1 o L2. Al igual que la L2, puede ser inclusiva y contener una copia de L2 además de información extra o, por el contrario, ser exclusiva y contener información totalmente diferente a la de los niveles anteriores, consiguiendo así una mayor capacidad total.
 */

export default counter;
