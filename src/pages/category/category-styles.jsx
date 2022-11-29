import styles from 'styled-components'

export const DirectoryCategory = styles.div`
display: grid;
grid-template-columns: repeat(4,1fr);
column-gap: 20px;
row-gap: 20px;

`
export const Title = styles.h2`
font-size: 28px;
margin-bottom: 25px;
text-align : center;
`