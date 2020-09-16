import React from 'react';
import {createStyles, withStyles} from "@material-ui/core/styles";
const styles = themes => {
    return createStyles({
        container: {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            width: '50px'
        },
        navBar: {
            backgroundColor: 'white',
            // boxShadow: 'rgba(0, 0, 0, 0.2) 4px 0px 7px',
            zIndex: 1,
            overflow: 'hidden'
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
            flex: '1'
        }
    })
}
const Navigation = ({ setActiveApp, classes, children }) => (
    <div className={classes.container}>
        <div className={classes.navBar}>
            <div onClick={() => setActiveApp('dashboard')}>
                <svg viewBox="0 0 138 30" style={{ width: 138, margin: '24px 8px' }}>
                    <g fill="currentColor">
                        <path d="M17 12v13.375c0 .345.28.625.625.625h-9A.625.625 0 0 1 8 25.375v-12.75c0-.345.28-.625.625-.625H17zm-6-1h-1V2.9L1 7.8V25h6v.375c0 .345.28.625.625.625h-7A.625.625 0 0 1 0 25.375V7.742c0-.457.25-.878.651-1.097l8.963-4.889A.938.938 0 0 1 11 2.58V11zm7.625-9h9.75c.345 0 .625.28.625.625v22.75c0 .345-.28.625-.625.625h-9.75a.625.625 0 0 1-.625-.625V2.625c0-.345.28-.625.625-.625zM52.179 24h-8.343V6.045h8.262c7.479 0 8.208 4.32 8.208 8.964 0 4.158-.54 8.991-8.127 8.991zm-5.373-2.538h5.292c4.833 0 5.13-3.024 5.13-6.399 0-4.023-.567-6.48-5.292-6.48h-5.13v12.879zM66.057 9.393h-2.835v-2.97h2.835v2.97zm0 14.607h-2.835V11.445h2.835V24zm14.472-9.153h-2.808l-.054-.405c-.081-.594-.621-.918-2.754-.918-2.484 0-3.024.351-3.024 1.512 0 .81.351 1.134 1.647 1.215l3.321.216c2.214.135 4.023.621 4.023 3.618 0 2.7-1.107 4.131-6.129 4.131-5.562 0-5.967-1.377-5.724-3.726h2.835l.054.432c.081.621.432.999 2.943.999 2.7 0 3.186-.378 3.186-1.701 0-1.026-.405-1.269-1.647-1.35l-3.321-.216c-2.16-.135-4.023-.648-4.023-3.456 0-2.538 1.161-3.969 5.94-3.969 5.157 0 5.805 1.161 5.535 3.618zm9.774 6.831V24c-.621.081-1.377.162-2.106.162-3.699 0-4.185-1.107-4.185-4.455V13.74H82.23v-2.295h1.782V8.394h2.835v3.051h3.699l-.567 2.295h-3.132v5.805c0 1.971.189 2.241 1.674 2.241.567 0 1.215-.027 1.782-.108zM95.676 24h-2.835V11.445h2.511l.162.864h.216c1.323-.783 2.592-1.08 3.969-1.08.432 0 .918.054 1.134.108v2.673a15.276 15.276 0 0 0-1.647-.081c-1.188 0-2.457.108-3.51.405V24zm10.395-14.607h-2.835v-2.97h2.835v2.97zm0 14.607h-2.835V11.445h2.835V24zm11.799-3.348l.054-.405h2.781c.297 2.457-.513 3.969-5.67 3.969-4.887 0-6.075-1.485-6.075-6.48 0-5.022 1.296-6.507 6.129-6.507 4.995 0 5.805 1.458 5.562 3.969h-2.808l-.054-.432c-.108-.837-.54-1.134-2.754-1.134-2.754 0-3.159.648-3.159 4.077 0 3.456.378 4.104 3.213 4.104 2.322 0 2.673-.351 2.781-1.161zm12.204 1.026V24c-.621.081-1.377.162-2.106.162-3.699 0-4.185-1.107-4.185-4.455V13.74h-1.782v-2.295h1.782V8.394h2.835v3.051h3.699l-.567 2.295h-3.132v5.805c0 1.971.189 2.241 1.674 2.241.567 0 1.215-.027 1.782-.108z" />
                    </g>
                </svg>
            </div>
            <div onClick={() => setActiveApp('axeptia')}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" style={{ margin: '0px 8px' }}>
                    <g id="AxeptiaIcon" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g id="Axeptia-logo-only-2" transform="translate(2.000000, 2.000000)" fillRule="nonzero">
                            <path d="M4.60562904,19.2 C3.29703015,19.2 2.19607424,18.6957234 1.42077422,17.7423025 C-0.126838155,15.8391363 -0.424858106,12.1739423 0.599165335,7.68543972 C1.67846065,2.8720242 4.35093028,0 7.7494034,0 C9.23800932,0 10.8072823,0.532945365 12.4131542,1.58486925 C16.1066596,4.00627895 18.7499995,7.38625522 19.1481063,10.1957962 C19.3258726,11.4513419 19.0450318,12.5481067 18.3347135,13.3670049 C15.9012574,16.2618171 9.8198578,18.5803132 5.34208937,19.1522187 C5.09779778,19.1826609 4.85186708,19.1986168 4.60562904,19.2 Z M9.18497821,2.32364179 C7.18772169,2.32364179 5.66699833,4.32898656 5.11502655,7.6898503 C4.54438183,11.088204 4.87153155,13.8925993 5.99041347,15.1878403 C6.43127938,15.7254646 7.09904475,16.0334583 7.80094069,16.0229105 C7.91751251,16.02254 8.03396932,16.0156681 8.14975101,16.0023278 C11.2561795,15.6347793 14.8182275,13.8793675 16.0917213,12.0813201 C17.4660489,10.1987366 15.6644847,6.28949041 12.1547209,3.54978368 C11.1135183,2.73603124 10.1141432,2.32364179 9.18497821,2.32364179 Z" id="Shape" fill="currentColor"></path>
                            <g id="Chart" transform="translate(7.200000, 4.800000)" fill="currentColor">
                                <path d="M3.76311504,7.14302609 C2.60665487,7.14302609 1.49161062,6.5714087 0.779256637,5.61474783 L0.762053097,5.59158261 L2.41869027,4.65245217 L2.43334513,4.66873043 C2.94307965,5.26789565 3.70768142,5.56090435 4.45890265,5.43693913 C5.55100885,5.25662609 6.26782301,4.24424348 6.0900531,3.13231304 C5.9460531,2.23074783 5.21968142,1.47318261 4.32382301,1.28973913 L4.30470796,1.28598261 L4.1600708,0.0964173913 L4.19638938,0.103930435 C5.65104425,0.405078261 6.85656637,1.62970435 7.12736283,3.0816 C7.50966372,5.13516522 5.99320354,7.13926957 3.75929204,7.13926957 L3.76311504,7.14302609 Z" id="Path"></path>
                                <path d="M1.64134513,0.540313043 L1.6719292,0.522156522 C2.22558325,0.189508498 2.86451789,0.019409814 3.51334513,0.0319304348 L3.64587611,1.26281739 L3.62038938,1.26657391 C3.33561356,1.3043473 3.06268945,1.40285716 2.82074336,1.5552 L2.80353982,1.56584348 L1.64134513,0.540313043 Z" id="Path" opacity="0.6"></path>
                                <path d="M1.05578761,0.998608696 L1.07299115,0.981078261 L2.29635398,2.03916522 C1.88558624,2.60272032 1.78582605,3.32970169 2.0300177,3.98003478 L0.338973451,4.85655652 C-0.24339823,3.47728696 0.0535221239,1.97655652 1.05578761,0.998608696 Z" id="Path"></path>
                            </g>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
        <div className={classes.content}>
            {children}
        </div>
    </div>
)

export default withStyles(styles)(Navigation);