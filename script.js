$.ajax({
  url: "https://www.omdbapi.com/?s=harry potter&apikey=bd323928&",
  success: (result) => {
    const movies = result.Search;
    console.log(movies);
    let cards = "";
    movies.forEach((m) => {
      cards += `<div class="w-2/5 h-2/5">
    <div class="flex flex-col bg-white border w-full h-full shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
    <img
        class="w-fit h-fit rounded-t-xl"
        src="${m.Poster}"
        alt="Image Description"
    />
    <div class="p-4 md:p-5">
        <h3 class="text-lg font-bold text-gray-800 dark:text-white leading-relaxed">${m.Title}</h3>
        <p class="text-gray-500 dark:text-gray-400">${m.Type} <span>(${m.Year})</span></p>

        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-basic-modal"
          data-movie-title="${m.Title}"
          data-movie-description="This is a wider card with supporting text below as a natural lead-in to additional content."
        >
          Open modal
        </button>
    </div>
    </div>
</div>`;
    });
    $(".movie-container").html(cards);

    // Menambahkan event listener pada setiap tombol untuk menampilkan modal
    $(".movie-container button[data-hs-overlay='#hs-basic-modal']").on("click", function () {
      const title = $(this).data("movie-title");
      const description = $(this).data("movie-description");

      // Memasukkan data film ke dalam modal
      $("#hs-basic-modal h3").text(title);
      $("#hs-basic-modal .text-gray-800").text(description);

      // Menampilkan modal
      $("#hs-basic-modal").toggleClass("hidden");
    });
  },
  err: (result) => console.log("data gagal diambil" + result),
});
