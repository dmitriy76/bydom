const smartgrid = require('smart-grid');

const settings = {
    outputStyle: 'scss',
    columns: 10,
    offset: '30px',
    container: {
        maxWidth: '1286px',
        fields: '20px'
    },
    breakPoints: {
        Xlarge: {
            width: "1140px",
            offset: '20px'
        },
        large: {
            width: "1023px"
        },
        Xmedium: {
            width: "991px"
        },
        medium: {
            width: "767px"
        },
        Xsmall: {
            width: "640px"
        },
        small: {
            width: "479px"
        },
        miniSmall: {
            width: "389px"
        }
    }
};

smartgrid('./assets/precss', settings);

/* вызов генерации в командной строке ============= node smartgrid.js ================= */