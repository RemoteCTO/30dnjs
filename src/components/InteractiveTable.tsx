'use client';

import React, { useState, useEffect } from "react";

import HeaderRow from "./InteractiveTable/HeaderRow";
import DataRow from "./InteractiveTable/DataRow";

export default function InteractiveTable(props) {
  const { data, filters } = props;
  const [filtersVisible, setFiltersVisible] = useState(false);
  const [displayedData, setDisplayedData] = useState(data);
  const [sortOrder, setSortOrder] =
    useState({field: data[0], direction: 'asc'});

  const setSort = (key) => {
    if (sortOrder.field === key) {
      setSortOrder({
        field: key,
        direction: sortOrder.direction === 'asc' ? 'desc' : 'asc'
      });
    } else {
      setSortOrder({field: key, direction: 'asc'});
    }
  }

  const sortedData = (data) => {
    return data.sort((a, b) => {
      if (sortOrder.direction === 'asc') {
        return a[sortOrder.field] > b[sortOrder.field] ? 1 : -1;
      } else {
        return a[sortOrder.field] < b[sortOrder.field] ? 1 : -1;
      }
    });
  }

  return (
    <div className="mx-auto max-w-screen-2xl px-4 lg:px-32">
      <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
        <div className="border-b dark:border-gray-700 mx-4">
          <div className="flex items-center justify-between space-x-4 pt-3">
            <div className="flex-1 flex items-center space-x-3">
              <h5 className="dark:text-white font-semibold">Inventors</h5>
            </div>
            <div className="flex-shrink-0 flex flex-row items-center justify-end space-x-3">
              <button type="button" className="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">View JSON</button>
              <button type="button" className="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                <svg className="mr-2 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>
                Export
              </button>
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
            <div className="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
              <form className="w-full md:max-w-sm flex-1 md:mr-4">
                <label htmlFor="default-search" className="text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg aria-hidden="true" className="w-4 h-4 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input type="search" id="default-search" className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search..." required />
                  <button type="submit" className="text-white absolute right-0 bottom-0 top-0 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-r-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Search</button>
                </div>
              </form>
              <div className="flex items-center space-x-4">
                <div>
                  <button
                    id="filterDropdownButton"
                    onClick={() => setFiltersVisible(!filtersVisible)}
                    className="w-full md:w-auto flex items-center justify-center py-2 px-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    type="button"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="h-4 w-4 mr-2 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z" clipRule="evenodd" />
                    </svg>
                    Filter
                    <svg className="-mr-1 ml-1.5 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path clipRule="evenodd" fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </button>
                  <div id="filterDropdown" className={`z-10 absolute w-48 p-3 bg-white rounded-lg shadow dark:bg-gray-700 ${filtersVisible ? '' : 'hidden'}`}>
                    <h6 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">Decade Born</h6>
                    <ul className="space-y-2 text-sm" aria-labelledby="filterDropdownButton">
                      { filters.options.map(filter => (
                        <li key={filter} className="flex items-center">
                          <input onChange={() => setDisplayedData(filters.logic(data, filter))} id={filter} type="checkbox" value="" className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"/>
                          <label htmlFor={filter} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-100">{filter}</label>
                        </li>
                      )) }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-4 pb-3 flex flex-wrap">
          <div className="hidden md:flex items-center text-sm font-medium text-gray-900 dark:text-white mr-4 mt-3">Show only:</div>
          <div className="flex flex-wrap">
            <div className="flex items-center mt-3 mr-4">
              <input id="inline-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="inline-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">All</label>
            </div>
            <div className="flex items-center mr-4 mt-3">
              <input id="inline-2-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="inline-2-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Active products</label>
            </div>
            <div className="flex items-center mr-4 mt-3">
              <input id="inline-3-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="inline-3-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Pending products</label>
            </div>
            <div className="flex items-center mr-4 mt-3">
              <input id="inline-4-radio" type="radio" value="" name="inline-radio-group" className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 focus:ring-primary-500 dark:focus:ring-primary-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
              <label htmlFor="inline-4-radio" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Inactive products</label>
            </div>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <HeaderRow data={data[0]} setSort={setSort} />
            </thead>
            <tbody>
              {sortedData(displayedData).map((row, i) => (
                <DataRow key={i} data={row} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 px-4 pt-3 pb-4" aria-label="Table navigation">
          <div className="text-xs flex items-center space-x-5"></div>
          <div className="flex items-center space-x-4">
            <button type="button" className="py-2 px-3 flex items-center text-xs font-medium text-center text-white bg-primary-700 rounded-lg hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Export CSV</button></div>
        </div>
      </div>
    </div>
  )
}
