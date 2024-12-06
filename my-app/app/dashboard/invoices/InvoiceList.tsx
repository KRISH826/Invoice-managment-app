import ActionList from '@/app/components/ActionList'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import React from 'react'

const InvoiceList = () => {
  return (
    <div>
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='font-semibold'>Invoice Id</TableHead>
                    <TableHead className='font-semibold'>Customer</TableHead>
                    <TableHead className='font-semibold'>Amount</TableHead>
                    <TableHead className='font-semibold'>Date</TableHead>
                    <TableHead className='font-semibold'>Status</TableHead>
                    <TableHead className='font-semibold text-end'>Actions</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow className='cursor-pointer'>
                    <TableCell>1</TableCell>
                    <TableCell>John Doe</TableCell>
                    <TableCell>1000</TableCell>
                    <TableCell>2023-01-01</TableCell>
                    <TableCell>paid</TableCell>
                    <TableCell className='text-end'>
                        <ActionList />
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>2</TableCell>
                    <TableCell>Peter Flake</TableCell>
                    <TableCell>2000</TableCell>
                    <TableCell>2023-02-02</TableCell>
                    <TableCell>Paid</TableCell>
                    <TableCell className='text-end'>View</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    </div>
  )
}

export default InvoiceList