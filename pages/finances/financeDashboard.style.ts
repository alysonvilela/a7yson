import { blueDark, slateDark } from "@radix-ui/colors";
import { createStitches, globalCss } from "@stitches/react";

const globalStyles = globalCss({
    '*': { margin: 0, padding: 0 },
    h2: {
    
    }
  });
  


export const { styled, css } = createStitches({
    utils: {
        px: (value: string | number | boolean ) => (
            {
            paddingLeft: value,
            paddingRight: value,
        }),
        py: (value: string | number | boolean) => ({
            paddingTop: value,
            paddingBottom: value,
        }),
        flexCenterAll: () => ({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }),
        flexCenterY: () => ({
            display: 'flex',
            alignItems: 'center',
        }),
        flexCenterX: () => ({
            display: 'flex',
            ajustifyContent: 'center',
        }),
    },
    theme: {
        colors: {
        ...slateDark,
        ...blueDark,

        },
        space: {
        2: '8px',
        3: '16px',
        4: '24px',
        5: '32px',
        6: '48px',
        },
        radii: {
        sm: '5px',
        md: '8px',
        lg: '16px',
        },
        sizes: {
        xxs: 8,
        xs: 16,
        sm: 24,
        md: 42,
        lg: 64,
        xlg: 248,
        xxlg: 510,
        },
        fontSizes: {
            1: 14, 
            2: 16,
            3: 20,
            4: 24,
            5: 32,
            6: 40
        },
        fontWeights: {
            bold: 700,
            regular: 400,
            light: 300,
        },
        fonts: {
            default: 'Inter',
        }
    }
  });

  
export const Button = styled('button', {
    py: '$1',
    px: '$2',
    fontWeight: 'regular',
    fontSize: 16,
    lineHeight: 1.5,
    textAlign: 'center',
    textDecoration: 'none',
    verticalAlign: 'middle',
    border: '1px solid transparent',
    color: '$blue11',
    backgroundColor: '$blue3',
    borderRadius: '$sm',

    '&:hover': {
        backgroundColor: '$blue4',
      },

      variants: {
        size: {
          small: {
              fontSize: '3px',
          },
          large: {},
        },
      },
})

export const Card = styled('div', {
    background: '$slate2',
    width: 200,
    minHeight: 250,
    borderRadius: '$md',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    textAlign: 'center',
    padding: '$3',

    '& h2': {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: '-1.2px',
        textDecoration: 'DarkBlue',
        textTransform: 'capitalize',
        color: '$slate12',
        marginBottom: '$3',
    },
    
    '& .description': {
        marginBottom: '$2',
    },

    '& p, span': {
        fontSize: 16,
        fontWeight: 'light',
        textTransform: 'capitalize',
        color: '$slate11',
        margin: 0,

    },

    span: {
        color: '$slate11',
    },
    variants: {
        bio: {
            true: {
                width: 500,
                textAlign: 'start',
                textTransform: 'none',
                
                p: {
                    textTransform: 'unset',
                    color: '$slate11',
                }
                
            }
        }
    },
})