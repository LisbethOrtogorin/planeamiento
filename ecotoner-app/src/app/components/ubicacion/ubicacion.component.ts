import {Component, OnInit} from '@angular/core';

interface Ef {
    descripcion: string
    valor: number
    clasificacion: number
}

interface PerfilCompetitivo {
    descripcion: string
    valor: number
}

@Component({
    selector: 'app-ubicacion',
    templateUrl: './ubicacion.component.html',
    styleUrls: ['./ubicacion.component.scss']
})
export class UbicacionComponent implements OnInit {

    fortalezas: Ef[] = [
        {
            descripcion: 'La empresa cuenta con personal técnico calificado.',
            valor: 0.2,
            clasificacion: 4
        },
        {
            descripcion: 'Bajo costo del producto y servicios ofrecidos.',
            valor: 0.1,
            clasificacion: 4
        },
        {
            descripcion: 'Se cuenta con local propio que esta adecuado a las necesidades del producto/servicio brindado.',
            valor: 0.1,
            clasificacion: 3
        },
        {
            descripcion: 'El producto es eco-amigable.',
            valor: 0.05,
            clasificacion: 4
        },
        {
            descripcion: 'Distribución a delivery con canales propios.',
            valor: 0.05,
            clasificacion: 3
        }
    ];
    debilidades: Ef[] = [
        {
            descripcion: 'LFalta de equipos automatizados, en la actualidad la mayor parte del proceso se realiza de forma manual.',
            valor: 0.1,
            clasificacion: 1
        },
        {
            descripcion: 'Falta de personal calificado en la ciudad del Cusco.',
            valor: 0.1,
            clasificacion: 1
        },
        {
            descripcion: 'Deficiencias en la publicidad.',
            valor: 0.05,
            clasificacion: 1
        },
        {
            descripcion: 'Demora en los tiempos de entrega.',
            valor: 0.2,
            clasificacion: 2
        },
        {
            descripcion: 'Deficiencia en la presentación del producto final',
            valor: 0.05,
            clasificacion: 1
        }
    ];
    sumaCalificacion: number = 0;
    sumaPonderada: number = 0;

    perfil: PerfilCompetitivo[] = [
        {
            descripcion: 'Calidad de producto',
            valor: 0.2
        },
        {
            descripcion: 'Competitividad en los precios',
            valor: 0.2
        },
        {
            descripcion: 'Participacion en el mercado',
            valor: 0.1
        },
        {
            descripcion: 'Publicidad',
            valor: 0.1
        },
        {
            descripcion: 'Recursos humanos',
            valor: 0.2
        },
        {
            descripcion: 'Movilidad para la distribucion',
            valor: 0.2
        }
    ];
    ecotonnerCal: number[] = [4, 4, 2, 2, 3, 2]
    edSuministrosCal: number[] = [2, 3, 4, 2, 2, 4]
    ccAmericaCal: number[] = [3, 2, 3, 2, 1, 1]
    totalsEmpresas: number[] = [0, 0, 0]

    constructor() {
    }

    ngOnInit() {
        this.sumaCalificacion += this.obtainCalification(this.fortalezas);
        this.sumaCalificacion += this.obtainCalification(this.debilidades);

        this.sumaPonderada += this.obtainPonderation(this.fortalezas);
        this.sumaPonderada += this.obtainPonderation(this.debilidades);

        this.totalsEmpresas[0] = this.obtainPCompetitivoPonderation(this.ecotonnerCal, this.perfil)
        this.totalsEmpresas[1] = this.obtainPCompetitivoPonderation(this.edSuministrosCal, this.perfil)
        this.totalsEmpresas[2] = this.obtainPCompetitivoPonderation(this.ccAmericaCal, this.perfil)


    }

    obtainPCompetitivoPonderation(empresa: number[], ponderation: PerfilCompetitivo[]): number{
        let acum = 0
        ponderation.forEach((value, index) => {
            acum += (empresa[index] * value.valor )
        })
        return acum
    }

    obtainCalification(efi: Ef[]): number {
        let acum = 0;
        efi.forEach(value => {
            acum += value.clasificacion;
        });
        return acum;
    }

    obtainPonderation(efi: Ef[]): number {
        let acum = 0;
        efi.forEach(value => {
            acum += (value.clasificacion * value.valor);
        });
        return acum;
    }

}
