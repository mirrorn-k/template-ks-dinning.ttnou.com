import { tTableContent } from 'src/types';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import { grey } from '@mui/material/colors';
import { useIsMobile } from 'src/functions/common/flgDevice';

interface MainProps {
  table: tTableContent;
}
export default function Main({ table }: MainProps) {
  const flg = useIsMobile();
  return (
    <>
      <Typography
        variant="h5"
        component="h3"
        align="left"
        sx={{ borderBottom: `1px solid ${grey[900]}`, pb: 1 }}
      >
        {table.title}
      </Typography>
      {flg ? <ContentUnder table={table} /> : <ContentOver table={table} />}
    </>
  );
}

function ContentOver({ table }: MainProps) {
  // 1. カラム（サイトの種類）を取得
  const headClms = Object.keys(table.value);

  // 2. 行ヘッダー（各項目）を取得
  const headRows = [
    ...new Set(headClms.flatMap((key) => Object.keys(table.value[key]))),
  ];

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            {headClms.map((clm, index) => (
              <TableCell key={`tableHead-${index}`}>{clm}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {headRows.map((row, rowIndex) => (
            <TableRow key={`tableRow-${rowIndex}`}>
              <TableCell>{row}</TableCell>
              {headClms.map((colKey, colIndex) => (
                <TableCell key={`tableCell-${rowIndex}-${colIndex}`}>
                  {table.value[colKey][row].length > 1
                    ? table.value[colKey][row]?.map((value, valueIndex) => (
                        <li key={`value-${rowIndex}-${colIndex}-${valueIndex}`}>
                          {value}
                        </li>
                      ))
                    : table.value[colKey][row][0] || '—'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

function ContentUnder({ table }: MainProps) {
  // 1. 行ヘッダー（サイトの種類）を新しい行として取得
  const newHeadRows = Object.keys(table.value);

  // 2. 列ヘッダー（元の行ヘッダー）を新しいカラムとして取得
  const newHeadClms = [
    '', // 空セル (元のカラムヘッダー)
    ...new Set(newHeadRows.flatMap((key) => Object.keys(table.value[key]))),
  ];

  return (
    <TableContainer sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
          <TableRow>
            {newHeadClms.map((clm, index) => (
              <TableCell key={`tableHead-${index}`}>{clm}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {newHeadRows.map((site, rowIndex) => (
            <TableRow key={`tableRow-${rowIndex}`}>
              {/* 左端に元のカラムヘッダー（サイトの種類）を配置 */}
              <TableCell>{site}</TableCell>
              {newHeadClms.slice(1).map((item, colIndex) => (
                <TableCell key={`tableCell-${rowIndex}-${colIndex}`}>
                  {table.value[site]?.[item]?.length > 1
                    ? table.value[site][item]?.map((value, valueIndex) => (
                        <li key={`value-${rowIndex}-${colIndex}-${valueIndex}`}>
                          {value}
                        </li>
                      ))
                    : table.value[site][item]?.[0] || '—'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
