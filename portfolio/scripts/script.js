(function(labels) {
    const field = document.querySelector('.typing span');
    let item = 0;
    
    const typeLabel = (label) => {
        field.textContent = '';
        next(label);
    };
    const next = (label, index = 0) => {
        if (index < label.length) {
            field.textContent += label[index++];
            setTimeout(() => next(label, index), 200);
        } else setTimeout(() => {
            item = (item + 1) % labels.length;
            typeLabel(labels[item]);
        }, 1700);
    };
    
    typeLabel(labels[item]);
})([ 'IT Student', 'Programming Enthusiast', 'Developer' ]);