export const customStyles = {
    tableWrapper: {
        style: {
            padding: '26px', // ✅ table padding
            borderRadius: '12px',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.06)',
        },
    },

    headRow: {
        style: {
            backgroundColor: '#f9fafb', // light gray
            borderBottom: '1px solid #e5e7eb',
        },
    },

    headCells: {
        style: {
            color: '#374151', // gray-700
            fontSize: '12px',
            fontWeight: '600',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '16px',
        },
    },

    rows: {
        style: {
            minHeight: '60px',
            backgroundColor: '#ffffff',
            borderBottom: '1px solid #f1f5f9',
            transition: 'all 0.2s ease',
        },
        highlightOnHoverStyle: {
            backgroundColor: '#f9fafb',
            cursor: 'pointer',
        },
    },

    cells: {
        style: {
            fontSize: '14px',
            color: '#111827', // gray-900
            padding: '16px',
        },
    },

    pagination: {
        style: {
            borderTop: '1px solid #e5e7eb',
            padding: '12px',
        },
    },
};