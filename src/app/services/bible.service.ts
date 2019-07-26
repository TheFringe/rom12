import { Injectable } from '@angular/core';
import { BibleWord } from '../models/bible-word';

@Injectable()
export class BibleService {

  romans: BibleWord[];
  constructor() {
    this.romans = [
      {
        book: 'Rom',
        chapter: 12,
        verse: 1,
        text: 'Därför ber jag er, bröder, vid Guds barmhärtighet att frambära er själva som ett levande och heligt offer som behagar Gud. Det skall vara er andliga gudstjänst.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 2,
        text: 'Anpassa er inte efter denna världen, utan låt er förvandlas genom förnyelsen av era tankar, så att ni kan avgöra vad som är Guds vilja: det som är gott, behagar honom och är fullkomligt.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 3,
        text: 'I kraft av den nåd jag har fått säger jag till var och en av er: ha inte för höga tankar om er själva utan tänk som man bör tänka, med självbesinning, så att var och en rättar sig efter det mått av tro som Gud har tilldelat honom.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 4,
        text: 'Ty liksom vi har en enda kropp men många lemmar, alla med olika uppgifter,'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 5,
        text: 'så utgör vi, fast många, en enda kropp i Kristus, men var för sig är vi lemmar som är till för varandra.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 6,
        text: 'Vi har olika gåvor allt efter den nåd vi har fått: profetisk gåva i förhållande till vår tro,'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 7,
        text: 'tjänandets gåva hos den som tjänar, undervisningens gåva hos den som undervisar,'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 8,
        text: 'tröstens gåva hos den som tröstar och förmanar, gåvan att frikostigt dela med sig, att vara nitisk som ledare och att med glatt hjärta visa barmhärtighet.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 9,
        text: 'Er kärlek skall vara uppriktig. Avsky det onda, håll fast vid det goda.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 10,
        text: 'Visa varandra tillgivenhet och broderlig kärlek, överträffa varandra i ömsesidig aktning.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 11,
        text: 'Slappna inte i er iver, håll er brinnande i anden. Tjäna Herren.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 12,
        text: 'Gläd er i hoppet, var uthålliga i lidandet och ihärdiga i bönen.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 13,
        text: 'Hjälp Guds heliga med vad de behöver, vinnlägg er om gästfrihet.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 14,
        text: 'Välsigna dem som förföljer er, välsigna dem och förbanna dem inte.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 15,
        text: 'Gläd er med dem som gläder sig och gråt med dem som gråter.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 16,
        text: 'Bemöt alla lika och håll er inte för goda att umgås med dem som är ringa. Var inte självkloka.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 17,
        text: 'Löna inte ont med ont. Tänk på vad som är riktigt för alla människor.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 18,
        text: 'Håll fred med alla människor så långt det är möjligt och kommer an på er.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 19,
        text: 'Ta inte rätten i egna händer, mina kära, utan låt Guds vrede ha sin gång, ty det står skrivet: Min är hämnden, jag skall utkräva den, säger Herren.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 20,
        text: 'Men är din fiende hungrig, ge honom att äta; är han törstig, ge honom att dricka. Då samlar du glödande kol på hans huvud.'
      },
      {
        book: 'Rom',
        chapter: 12,
        verse: 21,
        text: 'Låt dig inte besegras av det onda, utan besegra det onda med det goda.'
      }
    ];
  }

  public get(verse: number): BibleWord {
    return this.romans[verse - 1];
  }
}