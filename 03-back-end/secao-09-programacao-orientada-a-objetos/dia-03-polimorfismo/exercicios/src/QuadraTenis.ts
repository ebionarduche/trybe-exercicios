import Quadra from "./Quadra";
import { IAgenda } from "./interfaces/IAgenda";
import { Itenis } from "./interfaces/ITenis";
import normas from "./normas/normasDeUso";

class QuadraTenis extends Quadra {
  public tenisData: Itenis = normas.tenis

  public reservar<Itenis>(horaReseva: Date): IAgenda<Itenis> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      data: horaReseva,
      regras: this.tenisData as unknown as Itenis
    }

  }
}

export default QuadraTenis