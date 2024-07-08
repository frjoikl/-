document.addEventListener('DOMContentLoaded', function() {
  const symptomSelect = document.getElementById('symptomSelect');
  const infoDisplay = document.getElementById('infoDisplay');

  symptomSelect.addEventListener('change', function() {
    const selectedSymptom = symptomSelect.value;
    let medication = '';
    let precautions = '';
    let storage = '';
    let imageSrc = '';

    switch(selectedSymptom) {
      case 'headache':
        medication = '아세트아미노펜 (판콜, 타이레놀 등)';
        precautions = '권장 용량을 초과하여 복용하지 말고, 지정된 시간 간격을 유지하세요.';
        storage = '직사광선을 피하고, 습기가 없는 서늘한 곳에 보관하세요.';
        imageSrc = 'acetaminophen.jpg';
        break;
      case 'indigestion':
        medication = '심비쿰 (심바이탈 등)';
        precautions = '식사 후에 복용하고, 지정된 용량을 지켜주세요.';
        storage = '어린이의 손이 닿지 않는 곳에서 보관하세요.';
        imageSrc = 'simbicum.jpg';
        break;
      case 'cold':
        medication = '코타뎀 (타이레놀 콜드, 뉴탐, 코탐 등)';
        precautions = '복용 전에 의사나 약사와 상담하세요.';
        storage = '직사광선을 피하고, 습기가 없는 서늘한 곳에 보관하세요.';
        imageSrc = 'cold_medicine.jpg';
        break;
      case 'muscle_pain':
        medication = '이부프로펜 (써모피렉스, 모티브 등)';
        precautions = '복용 시 위장장애가 있을 수 있으니 의사의 지시에 따르세요.';
        storage = '어린이의 손이 닿지 않는 곳에서 보관하세요.';
        imageSrc = 'ibuprofen.jpg';
        break;
      default:
        medication = '안전상비의약품을 선택해주세요.';
        precautions = '';
        storage = '';
        imageSrc = '';
    }

    const infoHTML = `
      <div class="card-body">
        <h5 class="card-title">안전상비의약품 안내</h5>
        ${imageSrc ? `<img src="${imageSrc}" class="card-img-top mt-3 mb-3" alt="약 이미지">` : ''}
        <p class="card-text"><strong>의약품:</strong> ${medication}</p>
        <p class="card-text"><strong>주의사항:</strong> ${precautions}</p>
        <p class="card-text"><strong>보관법:</strong> ${storage}</p>
      </div>
    `;

    infoDisplay.innerHTML = infoHTML;
  });
});

