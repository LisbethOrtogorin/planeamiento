import {Component, OnInit} from '@angular/core';

interface Ef {
    descripcion: string;
    valor: number;
    clasificacion: number;
}

interface PerfilCompetitivo {
    descripcion: string;
    valor: number;
}

// tslint:disable-next-line:no-empty-interface
interface Peea extends PerfilCompetitivo {
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
            descripcion: 'La falta de equipos automatizados, en la actualidad la mayor parte del proceso se realiza de forma manual.',
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
    sumaCalificacion = 0;
    sumaPonderada = 0;

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
    ecotonnerCal: number[] = [4, 4, 2, 2, 3, 2];
    edSuministrosCal: number[] = [2, 3, 4, 2, 2, 4];
    ccAmericaCal: number[] = [3, 2, 3, 2, 1, 1];
    totalsEmpresas: number[] = [0, 0, 0];

    fortalezasPeEa: Peea[] = [
        {
            descripcion: 'La empresa cuenta con personal técnico calificado.',
            valor: 6,
        },
        {
            descripcion: 'Bajo costo del producto y servicios ofrecidos.',
            valor: 5,
        },
        {
            descripcion: 'Se cuenta con local propio que esta adecuado a las necesidades del producto/servicio brindado.',
            valor: 3,
        },
        {
            descripcion: 'El producto es eco-amigable.',
            valor: 4,
        },
        {
            descripcion: 'Distribución a delivery con canales propios.',
            valor: 3,
        }
    ];
    oportunidadesPeEa: Peea[] = [
        {
            descripcion: 'Ingreso en el Mercado como producto alternativo y eco- amigable.',
            valor: 5,
        },
        {
            descripcion: 'Eventos tecnológicos o de innovación realizados por alguna entidad pública' +
                ' o privada donde se pueda mostrar nuestro producto.',
            valor: 5,
        },
        {
            descripcion: 'Competencia escasa, en el área funcional de la empresa.',
            valor: 6,
        },
        {
            descripcion: 'Alto consumo de impresión por parte de las entidades públicas.',
            valor: 3,
        },
        {
            descripcion: 'Existencia de los e-comerce facilitando la venta por internet.',
            valor: 4,
        }
    ];
    debilidadesPeEa: Peea[] = [
        {
            descripcion: 'La falta de equipos automatizados, en la actualidad la mayor parte del proceso se realiza de forma manual.',
            valor: -2
        },
        {
            descripcion: 'Falta de personal calificado en la ciudad del Cusco.',
            valor: -1
        },
        {
            descripcion: 'Deficiencias en la publicidad.',
            valor: -3
        },
        {
            descripcion: 'Demora en los tiempos de entrega.',
            valor: -3
        },
        {
            descripcion: 'Deficiencia en la presentación del producto final',
            valor: -2
        }
    ];
    amenazasPeEa: Peea[] = [
        {
            descripcion: 'Surgimiento de la política de ahorro del papel y buenas prácticas en pro del cuidado del planeta.',
            valor: -5
        },
        {
            descripcion: 'Poco conocimiento de la remanufactura de tóner y mitos sobre este servicio.',
            valor: -3
        },
        {
            descripcion: 'Dependencia de proveedor de materia prima e insumos, ya que los insumos son importados desde E.E.U.U.',
            valor: -2
        },
        {
            descripcion: 'Ingreso de productos alternativos nuevos de procedencia china a muy bajo costo.',
            valor: -2
        },
        {
            descripcion: 'Disminución de costos de venta de los productos originales.',
            valor: -5
        }
    ];
    totalsPeEa: number[] = [0, 0, 0, 0];

    oportunidadesMpec = this.oportunidadesPeEa.splice(0);
    amenazasMpec = this.amenazasPeEa.splice(0);
    fortalezasMpec = this.fortalezasPeEa.splice(0);
    debilidadesMpec = this.debilidadesPeEa.splice(0);
    penetracionMercado: number[][] = [
        [3, 3, 4, 3, 3],
        [1, 2, 2, 1, 1],
        [4, 4, 3, 4, 3],
        [1, 1, 1, 2, 1]
    ];
    desarrolloMercado: number[][] = [
        [4, 3, 3, 4, 3],
        [4, 4, 2, 1, 1],
        [4, 3, 3, 4, 3],
        [4, 4, 2, 1, 1]
    ];
    desarrolloProductos: number[][] = [
        [4, 0, 0, 4, 0],
        [0, 2, 4, 4, 4],
        [4, 4, 2, 4, 0],
        [4, 2, 4, 0, 3]
    ];
    totalsMpec: number[][] = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];

    constructor() {
    }

    ngOnInit() {
        this.sumaCalificacion += this.obtainCalification(this.fortalezas);
        this.sumaCalificacion += this.obtainCalification(this.debilidades);

        this.sumaPonderada += this.obtainPonderation(this.fortalezas);
        this.sumaPonderada += this.obtainPonderation(this.debilidades);

        this.totalsEmpresas[0] = this.obtainPCompetitivoPonderation(this.ecotonnerCal, this.perfil);
        this.totalsEmpresas[1] = this.obtainPCompetitivoPonderation(this.edSuministrosCal, this.perfil);
        this.totalsEmpresas[2] = this.obtainPCompetitivoPonderation(this.ccAmericaCal, this.perfil);

        this.totalsPeEa[0] = this.obtainCalificationPeEa(this.fortalezasPeEa);
        this.totalsPeEa[1] = this.obtainCalificationPeEa(this.oportunidadesPeEa);
        this.totalsPeEa[2] = this.obtainCalificationPeEa(this.debilidadesPeEa);
        this.totalsPeEa[3] = this.obtainCalificationPeEa(this.amenazasPeEa);
        const oportunidadesMpecValue: number[] = [0.1, 0.1, 0.2, 0.05, 0.05];
        const amenazasMpecValue: number[] = [0.10, 0.15, 0.15, 0.05, 0.05];
        const fortalezasMpecValue: number[] = [0.2, 0.1, 0.1, 0.05, 0.05];
        const debilidadesMpecValue: number[] = [0.1, 0.1, 0.05, 0.2, 0.05];
        this.oportunidadesMpec.forEach((value, index) => {
            this.oportunidadesMpec[index].valor = oportunidadesMpecValue[index];
        });
        this.amenazasMpec.forEach((value, index) => {
            this.amenazasMpec[index].valor = amenazasMpecValue[index];
        });
        this.fortalezasMpec.forEach((value, index) => {
            this.fortalezasMpec[index].valor = fortalezasMpecValue[index];
        });
        this.debilidadesMpec.forEach((value, index) => {
            this.debilidadesMpec[index].valor = debilidadesMpecValue[index];
        });
        this.totalsMpec[0][0] = this.obtainPCompetitivoPonderation(this.penetracionMercado[0], this.oportunidadesMpec);
        this.totalsMpec[0][1] = this.obtainPCompetitivoPonderation(this.desarrolloMercado[0], this.oportunidadesMpec);
        this.totalsMpec[0][2] = this.obtainPCompetitivoPonderation(this.desarrolloProductos[0], this.oportunidadesMpec);

        this.totalsMpec[1][0] = this.obtainPCompetitivoPonderation(this.penetracionMercado[1], this.amenazasMpec);
        this.totalsMpec[1][1] = this.obtainPCompetitivoPonderation(this.desarrolloMercado[1], this.amenazasMpec);
        this.totalsMpec[1][2] = this.obtainPCompetitivoPonderation(this.desarrolloProductos[1], this.amenazasMpec);

        this.totalsMpec[2][0] = this.obtainPCompetitivoPonderation(this.penetracionMercado[2], this.fortalezasMpec);
        this.totalsMpec[2][2] = this.obtainPCompetitivoPonderation(this.desarrolloProductos[2], this.fortalezasMpec);
        this.totalsMpec[2][1] = this.obtainPCompetitivoPonderation(this.desarrolloMercado[2], this.fortalezasMpec);

        this.totalsMpec[3][0] = this.obtainPCompetitivoPonderation(this.penetracionMercado[3], this.debilidadesMpec);
        this.totalsMpec[3][1] = this.obtainPCompetitivoPonderation(this.desarrolloMercado[3], this.debilidadesMpec);
        this.totalsMpec[3][2] = this.obtainPCompetitivoPonderation(this.desarrolloProductos[3], this.debilidadesMpec);
    }

    obtainCalificationPeEa(foda: Peea[]): number {
        let acum = 0;
        foda.forEach(value => {
            acum += value.valor;
        });
        return acum;
    }

    obtainPCompetitivoPonderation(empresa: number[], ponderation: PerfilCompetitivo[]): number {
        let acum = 0;
        ponderation.forEach((value, index) => {
            acum += (empresa[index] * value.valor);
        });
        return acum;
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
