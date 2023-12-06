import { useState } from "react";
import BookEntry from "../../Components/Book-Entry";
import BookCopies from "../../Components/Book-Copies";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BorrowBook from "../../Components/Borrow-Book";

function StaffBookTable() {
  const [clickAll, setClickAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [clickBorrow, setClickBorrow] = useState(false);
  const [clickAdd, setClickAdd] = useState(false);
  const [handleCloseBook, setHandleCloseBook] = useState(false);

  //ALL
  const handleBorrowClick = () => {
    setClickBorrow(true);
    setClickAll(false);
  };

  const handleAddBookClose = () => {
    setHandleCloseBook(false);
  }

  const handleAddBook = () => {
    setClickAdd(true);
  };

  const handleCloseAdd = () => {
    setClickAdd(false);
  };

  const handleAllClick = () => {
    setClickAll(true);
    setClickBorrow(false);
  };

  const handleEntryClick = (entry) => {
    // Navigate to BookProfile component and pass entry data as state
    history.push({
      pathname: `/BookFlow-Admin-bookProfile-${entry.BookID}`, // Adjust the pathname as needed
      state: { entryData: entry }, // Pass entry data as state
    });
  };

  const allEntries = [
    {
      BookID: 1,
      Title: "Michael Jordan Biography",
      Author: "Michael Jordan",
      Genre: "Biography",
      ISBN: "892347162",
      Status: "available",
      Copies: 3,
    },
    // Add more entries here as needed
    {
      BookID: 2,
      Title: "Marvel vs Capcom",
      Author: "yapyapiee",
      Genre: "Action",
      ISBN: "234985323",
      Status: "available",
      Copies: 2,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
    {
      BookID: 3,
      Title: "Lawrence Tulodicakes",
      Author: "Lawrence Tulod",
      Genre: "Culinary",
      ISBN: "574839290",
      Status: "not available",
      Copies: 5,
    },
  ]; //SIMULATING BACKEND

  const filteredEntries = allEntries.filter((entry) =>
    entry.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredEntriesBorrow = allEntries.filter((entry) =>
    entry.Title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleEntryClickStaff = (entry) => {
    // Navigate to BookProfile component and pass entry data as state
    history.push({
      pathname: `/BookFlow-Staff-bookProfile-${entry.BookID}`, // Adjust the pathname as needed
      state: { entryData: entry }, // Pass entry data as state
    });
  };

  return (
    <div className="overflow-x-hidden ">
      <div className="userHomePage-div flex h-screen w-screen">
        <div className="mainContent flex h-[100%] w-[100%] flex-col">
          <div className="topNav flex w-[100%] h-[4rem] justify-between shadow-xl bg-[url('./assets/newbg.jpg')] bg-opacity-80">
            <div className="flex items-center">
              <svg
                className="flex ml-[0rem] mt-[0rem]"
                width="4rem"
                height="2.5rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                    fill="#D9D9D9"
                  />{" "}
                </g>
              </svg>

              <div className="flex text-[1.5rem]">
                <h1 className="text-white font-bold">BookFlow</h1>
              </div>
            </div>

            <div className="topContents ml-[-4rem] flex items-center justify-center text-white w-[40rem] text-[1.3rem]">
              <div className="flex">
                <a
                  href="#"
                  className="mr-[2.5rem] w-[7rem]
                h-[3rem] items-center justify-center flex bg-[#dac98d] bg-opacity-20  rounded-xl"
                >
                  Books
                </a>
              </div>
            </div>

            <div className="topRightContents flex w-auto items-center mr-[1.5rem]">
              <div className="profileIconBorder flex w-[5.5rem] justify-center rounded-3xl h-[2.4rem] items-center bg-[#755D41]">
                <img
                  src="#"
                  className="profileIcon flex w-[2.3rem] h-[2.3rem] mr-[0.5rem] rounded-3xl"
                />
                <div className="profileArrow flex ">
                  <svg
                    width="2rem"
                    height="2rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0" />

                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      {" "}
                      <path
                        d="M7 10L12 15L17 10"
                        stroke="#ffffff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />{" "}
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="middleContentDiv border-blue-700 p-[2rem] flex flex-col h-[85%] w-screen">
            <div className="searchExport flex justify-between border-[#392E05] w-[100%]">
              <div className="searchBar flex w-[110rem]">
                <input
                  type="text"
                  name=""
                  id=""
                  className="border outline-none border-[#392E05] w-[32%] h-[2.3rem] placeholder:text-[#000000] placeholder:text-opacity-50 rounded-md pl-[2.5rem] bg-opacity-20 bg-[#392E05]"
                  placeholder="Search User ID, Username, Name and etc..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                <svg
                  className="absolute mt-[0.4rem] ml-[0.6rem]"
                  height="1.5rem"
                  width="1.2rem"
                  version="1.1"
                  id="_x32_"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  viewBox="0 0 512 512"
                  xml:space="preserve"
                  fill="#392E05"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <style type="text/css"></style>{" "}
                    <g>
                      {" "}
                      <path
                        class="st0"
                        d="M312.069,53.445c-71.26-71.26-187.194-71.26-258.454,0c-71.261,71.26-71.261,187.206,0,258.466 c71.26,71.26,187.194,71.26,258.454,0S383.329,124.705,312.069,53.445z M286.694,286.536 c-57.351,57.34-150.353,57.34-207.704-0.011s-57.351-150.353,0-207.693c57.351-57.351,150.342-57.351,207.693,0 S344.045,229.174,286.694,286.536z"
                      />{" "}
                      <path
                        class="st0"
                        d="M101.911,112.531c-29.357,37.725-31.801,89.631-7.321,129.702c1.877,3.087,5.902,4.048,8.978,2.182 c3.065-1.888,4.037-5.903,2.16-8.978c-21.666-35.456-19.506-81.538,6.469-114.876c2.226-2.837,1.713-6.938-1.135-9.154 C108.227,109.193,104.125,109.695,101.911,112.531z"
                      />{" "}
                      <path
                        class="st0"
                        d="M498.544,447.722l-132.637-129.2c-7.255-7.07-18.84-6.982-26.008,0.174l-21.033,21.033 c-7.156,7.156-7.234,18.742-0.153,25.986l129.19,132.636c14.346,17.324,35.542,18.35,51.917,1.964 C516.216,483.951,515.857,462.068,498.544,447.722z"
                      />{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>

              <div className="flex hover:cursor-pointer items-center rounded-lg border w-[8rem] border-[#392E05] bg-[#392E05] bg-opacity-20 hover:bg-opacity-40">
                <svg
                  width="1rem"
                  height="1rem"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[0.5rem] mr-[0.5rem]"
                >
                  <path
                    d="M4 12H20M12 4V20"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <h1 className="ml-[0.5rem]" onClick={handleAddBook}>
                  Add Book
                </h1>
              </div>
            </div>

            <div className="tableDiv bg-[#392E05] p-[2rem] bg-opacity-20 rounded-t-xl mt-[1.5rem] w-[100%] h-[100%] border-black">
              <div className="tableTab flex w-[100%] border-b items-center border-[#392E05] h-[2rem] border-opacity-40 justify-between">
                <div className="flex w-[35rem] border-black items-center h-[100%]">
                  <button
                    className={`allButton flex border-b w-[25%] justify-center h-[104%] items-center border-[#392E05] ${
                      clickAll === true
                        ? "border-opacity-100"
                        : "border-opacity-0"
                    } `}
                    onClick={() => {
                      handleAllClick();
                      handleShowAll();
                    }}
                  >
                    <h1 className="text-[1rem] ">All</h1>
                    <h1 className="ml-[0.5rem] w-[1.5rem] h-[1.5rem] text-[1rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                      {allEntries.length}
                    </h1>
                  </button>

                  <button
                    className={`allButton flex border-b w-[25%] justify-center h-[104%] items-center border-[#392E05] ${
                      clickBorrow === true
                        ? "border-opacity-100"
                        : "border-opacity-0"
                    } `}
                    onClick={() => {
                      handleBorrowClick();
                      handleShowBorrow();
                    }}
                  >
                    <h1 className="text-[1rem]">Borrowed</h1>
                    <h1 className="ml-[0.5rem] w-[1.5rem] h-[1.5rem] text-[1rem] bg-[#392E05] bg-opacity-20 rounded-lg">
                      {allEntries.length}
                    </h1>
                  </button>
                </div>
                <h1>{`Showing ${filteredEntries.length} out of ${allEntries.length} results`}</h1>
              </div>

              <div className="tableContent relative flex flex-col border-red-600 h-[95%] w-[100%] overflow-x-auto overflow-y-auto">
                <table className="flex flex-col w-[100%] border-red-600 overflow-x-auto">
                  <thead className="flex w-[100%]">
                    <tr className="text-[1rem] mt-[2rem] flex bg-[#392E05] bg-opacity-20 h-[2.5rem] justify-evenly items-center w-[100%] border-[#392E05] rounded-md border">
                      {clickAll === true && (
                        <>
                          <th className="absolute mr-[77.5%]">Book ID</th>
                          <th className="absolute mr-[50%] justify-center">
                            Title
                          </th>
                          <th className="absolute mr-[16%] justify-center">
                            Author
                          </th>
                          <th className="absolute mr-[-16%] justify-center">
                            Genre
                          </th>
                          <th className="absolute mr-[-47%] justify-center">
                            ISBN
                          </th>
                          <th className="absolute mr-[-80%] justify-center">
                            Status
                          </th>
                        </>
                      )}

                      {clickBorrow === true && (
                        <>
                          <th className="absolute mr-[77%]">Borrow ID</th>
                          <th className="absolute mr-[50%] justify-center">
                            Book
                          </th>
                          <th className="absolute mr-[16%] justify-center">
                            Borrower
                          </th>
                          <th className="absolute mr-[-17%] justify-center">
                            Date Borrowed
                          </th>
                          <th className="absolute mr-[-48%] justify-center">
                            Due Date
                          </th>
                          <th className="absolute mr-[-80%] justify-center">
                            Status
                          </th>
                        </>
                      )}
                    </tr>
                  </thead>

                  <tbody className="border-blue-700 h-[100%] w-[100%] mt-[1rem] overflow-y-auto">
                    {/* Rendering AdminEntry components dynamically using map */}

                    <>
                      {clickAll === true &&
                        filteredEntries.map((entry, index) => (
                          <div
                            className="block hover:bg-[#392E05] hover:bg-opacity-20 rounded hover:cursor-pointer"
                            onClick={() => handleEntryClickStaff(entry)}
                          >
                            <Link
                              to={{
                                pathname: `/BookFlow-Staff-bookProfile:${entry.BookID}`, // Assuming BookID is unique for each book
                                state: { bookDetails: entry }, // Pass book details as state to the BookProfile component
                              }}
                              className="w-full h-full"
                            >
                              <BookEntry
                                key={index} // Add a unique key for each entry
                                BookID={entry.BookID}
                                Title={entry.Title}
                                Author={entry.Author}
                                Genre={entry.Genre}
                                ISBN={entry.ISBN}
                                Status={entry.Status}
                                Copies={entry.Copies}
                              />
                            </Link>
                          </div>
                        ))}

                      {clickBorrow === true &&
                        filteredEntriesBorrow.map((entry, index) => (
                          <div
                            onClick={() => handleEntryClickStaff(entry)}
                            className="block hover:bg-[#392E05] hover:bg-opacity-20 rounded"
                          >
                            <BorrowBook
                              key={index} // Add a unique key for each entry
                              BookID={entry.BookID}
                              Title={entry.Title}
                              Author={entry.Author}
                              Genre={entry.Genre}
                              ISBN={entry.ISBN}
                              Status={entry.Status}
                              Copies={entry.Copies}
                            />
                          </div>
                        ))}
                    </>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {clickAdd === true && (
        <form
          action="POST"
          className="AddStaffDiv justify-center items-center flex absolute inset-0 z-50 bg-black bg-opacity-60 w-screen h-screen"
        >
          <div className="inputForm flex flex-col border p-[1.5rem] bg-white rounded-lg w-[50%] h-[70%]">
            <div className="topNav flex pb-[0.5rem] items-center justify-between border-[#392E05] w-[100%]">
              <h1 className="text-[1.4rem] text-[#392E05]">Add Book</h1>
              <svg
                width="1.5rem"
                height="1.5rem"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="cursor-pointer"
                onClick={handleCloseAdd}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0" />

                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />

                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M10.0303 8.96965C9.73741 8.67676 9.26253 8.67676 8.96964 8.96965C8.67675 9.26255 8.67675 9.73742 8.96964 10.0303L10.9393 12L8.96966 13.9697C8.67677 14.2625 8.67677 14.7374 8.96966 15.0303C9.26255 15.3232 9.73743 15.3232 10.0303 15.0303L12 13.0607L13.9696 15.0303C14.2625 15.3232 14.7374 15.3232 15.0303 15.0303C15.3232 14.7374 15.3232 14.2625 15.0303 13.9696L13.0606 12L15.0303 10.0303C15.3232 9.73744 15.3232 9.26257 15.0303 8.96968C14.7374 8.67678 14.2625 8.67678 13.9696 8.96968L12 10.9393L10.0303 8.96965Z"
                    fill="#392E05"
                  />{" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12 1.25C6.06294 1.25 1.25 6.06294 1.25 12C1.25 17.9371 6.06294 22.75 12 22.75C17.9371 22.75 22.75 17.9371 22.75 12C22.75 6.06294 17.9371 1.25 12 1.25ZM2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12Z"
                    fill="#392E05"
                  />{" "}
                </g>
              </svg>
            </div>

            <div className="border flex border-l-0 border-r-0 justify-between h-[100%] border-t-[#392E05] border-b-[#392E05] w-[100%]">
              <div className="otherInput flex flex-col w-[50%] items-center mt-[0rem]">
                <input
                  type="text"
                  placeholder="Title"
                  className="border outline-none mt-[1rem] placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
                <input
                  type="text"
                  placeholder="Author(s)"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />

                <div className="flex w-[100%] items-center mt-[1rem] h-[15%] border-black">
                  <p className="w-[10rem] justify-center flex items-center">
                    Publication Date:{" "}
                  </p>
                  <input
                    type="date"
                    placeholder="Publication"
                    className="border outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[70%] pl-[1rem] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20"
                  />
                </div>
                <input
                  type="text"
                  required
                  placeholder="International Standard Book Number (ISBN)"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
                <input
                  type="text"
                  placeholder="Edition"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
                <input
                  type="text"
                  placeholder="Format"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />

                <input
                  type="text"
                  placeholder="Number of Copies"
                  className="border mt-[1rem] outline-none placeholder:text-[#392E05] placeholder:opacity-60 h-[2.4rem] w-[100%] border-[#392E05] rounded-xl bg-[#392E05] bg-opacity-20 pl-[1rem]"
                />
              </div>

              <div className="border-black w-[45%] h-[100%] pt-[1rem] flex items-center flex-col">
                <div className="draghere flex flex-col items-center justify-center border bg-[#392E05] bg-opacity-20 rounded-xl border-[#392E05] w-[100%] h-[40%]">
                  <svg
                    width="5rem"
                    height="5rem"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className=""
                  >
                    <path
                      d="M7 10V9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9V10C19.2091 10 21 11.7909 21 14C21 15.4806 20.1956 16.8084 19 17.5M7 10C4.79086 10 3 11.7909 3 14C3 15.4806 3.8044 16.8084 5 17.5M7 10C7.43285 10 7.84965 10.0688 8.24006 10.1959M12 12V21M12 12L15 15M12 12L9 15"
                      stroke="#000000"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <p>Upload file</p>
                  <div className="">
                    <input
                      type="file"
                      accept="image/*"
                      className="items-center flex w-[100%] none"
                    />
                  </div>
                </div>

                <input
                  placeholder="Synopsis"
                  className="pb-[6rem] border-[#392E05] outline-none synopsis bg-[#392E05] bg-opacity-20 border w-[100%] h-[30%] pl-[1rem] rounded-xl mt-[2rem]"
                />
              </div>
            </div>

            <div className="buttonsDiv w-[100%] h-[10%] justify-end items-center flex">
              <button type="submit" className="w-[10rem] text-white bg-[#392E05] h-[2rem] mt-[2rem] rounded-xl"
                onClick={handleAddBookClose}
              >
                  <h1>Confirm</h1>
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default StaffBookTable;