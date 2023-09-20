import Clube from "./src/Clube";
import QuadraFutebol from "./src/QuadraFutebol";

const ClubeDeClubes = new Clube()

const quadraFutebol = new QuadraFutebol()

ClubeDeClubes.adicionarQuadra(quadraFutebol)

const dataReservada = new Date('2022-12-28')

const reservarquadraFutebol = ClubeDeClubes.buscarQuadra<QuadraFutebol>(0).reservar(dataReservada);
console.log(reservarquadraFutebol)