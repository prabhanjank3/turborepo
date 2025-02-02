import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
  TableSortLabel,
  IconButton,
  Toolbar,
  Typography,
  CircularProgress,
  Box,
  Checkbox,
  TextField,
  Button,
  styled,
  InputAdornment,
  Collapse,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import SearchIcon from '@mui/icons-material/Search';

// Custom styled components for better design
const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  boxShadow: theme.shadows[3],
  overflow: 'hidden',
}));

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  '& .MuiTableCell-root': {
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  transition: 'all 0.3s ease',
}));

const SearchField = styled(TextField)(({ theme }) => ({
  flexGrow: 1,
  maxWidth: '300px',
  marginRight: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    borderRadius: '50px',
  },
}));

// Define TypeScript interfaces
export interface Column {
  field: string;
  headerName: string;
  renderCell?: (value: any) => React.ReactNode;
  sortable?: boolean;
}

export interface Action {
  icon: React.ReactNode;
  onClick: (rowData: any) => void;
}

export interface ReusableTableProps {
  columns: Column[];
  data: any[];
  loading?: boolean;
  error?: string;
  actions?: Action[];
  customToolbar?: React.ReactNode;
  search?: boolean;
  pagination?: {
    page: number;
    pageSize: number;
    totalRows: number;
  };
  onPageChange?: (page: number, pageSize: number) => void;
  onSort?: (field: string, order: 'asc' | 'desc') => void;
  onRowSelectionChange?: (selectedRows: any[]) => void;
  exportOptions?: {
    enableCsvExport?: boolean;
  };
}

const ReusableTable: React.FC<ReusableTableProps> = ({
  columns,
  data,
  loading = false,
  error,
  actions,
  customToolbar,
  pagination,
  onPageChange,
  onSort,
  onRowSelectionChange,
  exportOptions,
}) => {
  const [order, setOrder] = useState<'asc' | 'desc'>('asc');
  const [orderBy, setOrderBy] = useState<string>('');
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);

  // Handle sorting
  const handleSort = (field: string) => {
    const isAsc = orderBy === field && order === 'asc';
    const newOrder = isAsc ? 'desc' : 'asc';
    setOrder(newOrder);
    setOrderBy(field);
    onSort?.(field, newOrder);
  };

  // Handle pagination
  const handlePageChange = (event: unknown, newPage: number) => {
    onPageChange?.(newPage, pagination?.pageSize || 10);
  };

  const handlePageSizeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onPageChange?.(pagination?.page || 0, parseInt(event.target.value, 10));
  };

  // Handle row selection
  const handleSelectAllRows = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelectedRows = data.map((row) => row);
      setSelectedRows(newSelectedRows);
      onRowSelectionChange?.(newSelectedRows);
    } else {
      setSelectedRows([]);
      onRowSelectionChange?.([]);
    }
  };

  const handleSelectRow = (row: any) => {
    const selectedIndex = selectedRows.findIndex(
      (selectedRow) => selectedRow.id === row.id
    );
    let newSelectedRows: any[] = [];

    if (selectedIndex === -1) {
      newSelectedRows = [...selectedRows, row];
    } else {
      newSelectedRows = selectedRows.filter(
        (selectedRow) => selectedRow.id !== row.id
      );
    }

    setSelectedRows(newSelectedRows);
    onRowSelectionChange?.(newSelectedRows);
  };

  // Handle search
  const filteredData = data.filter((row) =>
    columns.some((column) =>
      String(row[column.field]).toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  // Handle CSV export
  const handleExportCsv = () => {
    const headers = columns.map((column) => column.headerName).join(',');
    const rows = filteredData
      .map((row) =>
        columns.map((column) => JSON.stringify(row[column.field])).join(',')
      )
      .join('\n');
    const csv = `${headers}\n${rows}`;
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' });
  };

  return (
    <Paper>
      {/* Custom Toolbar with Search Bar */}
      <StyledToolbar>
        <SearchContainer>
          <IconButton
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            sx={{ display: isSearchOpen ? 'none' : 'inherit', mr: 2 }}
          >
            <SearchIcon />
          </IconButton>
          <Collapse in={isSearchOpen} orientation="horizontal">
            <SearchField
              variant="outlined"
              size="small"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Collapse>
        </SearchContainer>
        <Box display="flex" alignItems="center">
          {exportOptions?.enableCsvExport && (
            <Button variant="outlined" onClick={handleExportCsv}>
              Export CSV
            </Button>
          )}
          {customToolbar}
        </Box>
      </StyledToolbar>

      {/* Loading State */}
      {loading && (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      )}

      {/* Error State */}
      {error && (
        <Box display="flex" justifyContent="center" p={4}>
          <Typography color="error">{error}</Typography>
        </Box>
      )}

      {/* Empty State */}
      {!loading && !error && filteredData.length === 0 && (
        <Box display="flex" justifyContent="center" p={4}>
          <Typography>No data available</Typography>
        </Box>
      )}

      {/* Table */}
      <StyledTableContainer>
        <Table>
          <StyledTableHead>
            <TableRow>
              {/* Row Selection Checkbox */}
              {onRowSelectionChange && (
                <TableCell padding="checkbox">
                  <Checkbox
                    indeterminate={
                      selectedRows.length > 0 &&
                      selectedRows.length < filteredData.length
                    }
                    checked={
                      filteredData.length > 0 &&
                      selectedRows.length === filteredData.length
                    }
                    onChange={handleSelectAllRows}
                  />
                </TableCell>
              )}

              {/* Table Columns */}
              {columns.map((column) => (
                <TableCell
                  key={column.field}
                  sortDirection={orderBy === column.field ? order : false}
                >
                  {column.sortable ? (
                    <TableSortLabel
                      active={orderBy === column.field}
                      direction={orderBy === column.field ? order : 'asc'}
                      onClick={() => handleSort(column.field)}
                    >
                      {column.headerName}
                      {orderBy === column.field && (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc'
                            ? 'sorted descending'
                            : 'sorted ascending'}
                        </Box>
                      )}
                    </TableSortLabel>
                  ) : (
                    column.headerName
                  )}
                </TableCell>
              ))}
              {actions && <TableCell>Actions</TableCell>}
            </TableRow>
          </StyledTableHead>
          <TableBody>
            {filteredData.map((row, rowIndex) => (
              <StyledTableRow key={rowIndex}>
                {/* Row Selection Checkbox */}
                {onRowSelectionChange && (
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedRows.some(
                        (selectedRow) => selectedRow.id === row.id
                      )}
                      onChange={() => handleSelectRow(row)}
                    />
                  </TableCell>
                )}

                {/* Table Cells */}
                {columns.map((column) => (
                  <TableCell key={column.field}>
                    {column.renderCell
                      ? column.renderCell(row[column.field])
                      : row[column.field]}
                  </TableCell>
                ))}
                {actions && (
                  <TableCell>
                    {actions.map((action, actionIndex) => (
                      <IconButton
                        key={actionIndex}
                        onClick={() => action.onClick(row)}
                      >
                        {action.icon}
                      </IconButton>
                    ))}
                  </TableCell>
                )}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>

      {/* Pagination */}
      {pagination && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={pagination.totalRows}
          rowsPerPage={pagination.pageSize}
          page={pagination.page}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handlePageSizeChange}
        />
      )}
    </Paper>
  );
};

export default ReusableTable;
