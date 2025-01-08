
        const facturasData = [
            { concepto: 'Administración', mes: 'Enero', fechaExpiracion: '2025-01-31', valor: 150000, estado: 'Pendiente' },
            { concepto: 'Administración', mes: 'Enero', fechaExpiracion: '2025-01-31', valor: 50000, estado: 'Pendiente' },
            { concepto: 'Administración', mes: 'Diciembre', fechaExpiracion: '2024-12-31', valor: 30000, estado: 'Vencida' }
        ];

        function mostrarFacturas() {
            const apartamento = document.getElementById("apartamento").value;
            const facturasSection = document.getElementById("facturas-section");
            const facturasList = document.getElementById("facturas-list");
            const continuarBtn = document.getElementById("continuar-btn");
            let totalPagar = 0;

            // Limpiar lista de facturas
            facturasList.innerHTML = "";

            if (apartamento === "1010C") {
                facturasSection.style.display = "block";
                continuarBtn.style.display = "block";

                // Mostrar facturas
                facturasData.forEach((factura, index) => {
                    const facturaDiv = document.createElement("div");
                    facturaDiv.classList.add("factura");

                    facturaDiv.innerHTML = `
                        <input type="checkbox" id="factura-${index}" data-valor="${factura.valor}" onclick="actualizarTotal()">
                        <p><strong>Concepto:</strong> ${factura.concepto}</p>
                        <p><strong>Mes:</strong> ${factura.mes}</p>
                        <p><strong>Fecha de expiración:</strong> ${factura.fechaExpiracion}</p>
                        <p><strong>Valor:</strong> $${factura.valor.toLocaleString()}</p>
                        <p><strong>Estado:</strong> ${factura.estado}</p>
                    `;

                    facturasList.appendChild(facturaDiv);
                });
            } else {
                facturasSection.style.display = "none";
                continuarBtn.style.display = "none";
            }
        }

        function actualizarTotal() {
            let totalPagar = 0;
            const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
            checkboxes.forEach(checkbox => {
                totalPagar += parseInt(checkbox.getAttribute('data-valor'));
            });
            document.getElementById("total-pagar").textContent = totalPagar.toLocaleString();
        }

        function continuarPago() {
            alert("¡Ahora puedes continuar con el pago!");
        }

        // Escuchar cambios en los campos seleccionables
        document.getElementById("residencial").addEventListener("change", mostrarFacturas);
        document.getElementById("torre").addEventListener("change", mostrarFacturas);
        document.getElementById("apartamento").addEventListener("change", mostrarFacturas);