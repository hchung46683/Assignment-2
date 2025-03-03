// Add a listener for page load
document.addEventListener('DOMContentLoaded', function() {

    function handleToggle(rowId) {
        const row = document.getElementById(rowId);

        // Find all toggles in the row
        const toggles = row.querySelectorAll('input');

        // Add a listener for each toggle
        toggles.forEach(toggle => {
            toggle.addEventListener('input', function() {
                if (this.checked) {
                    toggles.forEach(otherToggle => {
                        if (otherToggle !== this) {
                            otherToggle.checked = false;
                        }
                    });
                }
            });
        });
    }

    handleToggle("row-1");
    handleToggle("row-2");
    handleToggle("row-3");
    handleToggle("row-4");
    handleToggle("row-5");
    handleToggle("row-6");
    handleToggle("row-7");
    handleToggle("row-8");
    handleToggle("row-9");

    function updateRGBValue() {
        const r1 = document.querySelector('#row-1 input[type="checkbox"]:checked')?.value || '0';
        const r2 = document.querySelector('#row-2 input[type="checkbox"]:checked')?.value || '0';
        const r3 = document.querySelector('#row-3 input[type="checkbox"]:checked')?.value || '0';
        const r4 = document.querySelector('#row-4 input[type="checkbox"]:checked')?.value || '0';
        const r5 = document.querySelector('#row-5 input[type="checkbox"]:checked')?.value || '0';
        const r6 = document.querySelector('#row-6 input[type="checkbox"]:checked')?.value || '0';
        const r7 = document.querySelector('#row-7 input[type="checkbox"]:checked')?.value || '0';
        const r8 = document.querySelector('#row-8 input[type="checkbox"]:checked')?.value || '0';
        const r9 = document.querySelector('#row-9 input[type="checkbox"]:checked')?.value || '0';

        const rValue = `${r1}${r2}${r3}`;
        const gValue = `${r4}${r5}${r6}`;
        const bValue = `${r7}${r8}${r9}`;

        document.getElementById('rgbValue').textContent = `${rValue}, ${gValue}, ${bValue}`;
        const circle = document.querySelector('.circle');
        const rInt = parseInt(rValue);
        const gInt = parseInt(gValue);
        const bInt = parseInt(bValue);
        
        if (rInt > 255 || gInt > 255 || bInt > 255) {
            circle.style.backgroundColor = 'rgb(0, 0, 0)';
        } else {
            circle.style.backgroundColor = `rgb(${rInt}, ${gInt}, ${bInt})`;
        }
    }

    document.querySelectorAll('.switch-row input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const row = this.closest('.switch-row');
            row.querySelectorAll('input[type="checkbox"]').forEach(cb => {
                if (cb !== this) cb.checked = false;
            });
            updateRGBValue();
        });
    });
});