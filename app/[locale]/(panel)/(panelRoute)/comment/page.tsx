"use client";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Rootstate } from "@/lib/store";
import { useState } from "react";
import { AppDispatch } from "@/lib/store";
import { Trash } from "lucide-react";
import { addcm, deletecm } from "@/faeture/product/productSlice";
import { useTranslations } from "next-intl";
export default function Comment() {
  const [productId, setProductId] = useState("");
  const [comment, setComment] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const productList = useSelector(
    (state: Rootstate) => state.productSlicing.product,
  );
  const t = useTranslations("Comment");
  const comments = useSelector((state: Rootstate) => state.addComment.comments);

  const selectedProduct = productList.find(
    (item) => item.id === Number(productId),
  );

  function handleAdd(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    dispatch(
      addcm({
        id: Date.now(),
        productId: selectedProduct?.id,
        comment: comment.trim(),
      }),
    );
    setProductId("");
    setComment("");
    (document.getElementById("my_modal_1") as HTMLDialogElement)?.close();
  }
  function hendleDelete(id: number) {
    dispatch(deletecm(id));
  }
  return (
    <section className="flex flex-col gap-10 px-5 lg:px-20">
      <header className="flex flex-row justify-between items-center">
        <div className="flex flex-col mt-10 gap-5">
          <h1 className="text-foreground text-3xl font-bold"> {t("title")}</h1>
          <p className="text-text-title text-xl">{t("description")} </p>
        </div>
      </header>
      <div className="rounded-2xl border border-white/10 bg-second-background p-5 w-full flex flex-col items-start gap-5 justify-between">
        <p className="text-foreground text-xl"> {t("addNew")} </p>
        <p className="text-text-title">{t("addDescription")} </p>
        <button
          className="bg-foreground px-10 py-3 hover:translate-y-0.5 cursor-copy hover:transition ease-in rounded-2xl text-background"
          onClick={() =>
            (
              document.getElementById("my_modal_1") as HTMLDialogElement
            )?.showModal()
          }
        >
          + {t("addButton")}
        </button>
      </div>

      <div className="rounded-2xl border border-white/10 bg-second-background p-5 flex flex-col gap-5 w-full">
        <h2 className="text-foreground text-xl font-bold">
          {t("registeredComments")}
        </h2>

        {comments.length === 0 ? (
          <p className="text-text-title">{t("emptyComments")}</p>
        ) : (
          comments.map((item) => {
            const product = productList.find((p) => p.id === item.productId);

            if (!product) return null;

            return (
              <div
                key={item.id}
                className="flex flex-col md:flex-row items-start gap-4 rounded-xl bg-background p-4"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-16 h-16 rounded-xl object-cover"
                />

                <div className="flex flex-col gap-3 flex-1">
                  <h3 className="text-foreground font-bold">{product.title}</h3>

                  <p className="text-text-title leading-7">{item.comment}</p>
                </div>

                <button
                  onClick={() => hendleDelete(item.id)}
                  className="text-red-900 bg-[#AF44482f] p-2 h-10 cursor-pointer rounded-xl justify-between items-center"
                >
                  <Trash />
                </button>
              </div>
            );
          })
        )}
      </div>

      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-second-background">
          <form action="" onSubmit={handleAdd} className=" flex flex-col gap-5">
            <div className="flex flex-col gap-3 w-full">
              <p className="text-foreground">{t("selectProduct")}</p>
              <select
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
                required
                className="bg-background text-text-title h-12 rounded-xl px-3 outline-none w-full"
              >
                <option value="" className="w-full">
                  {t("selectProductPlaceholder")}
                </option>

                {productList.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.title}
                  </option>
                ))}
              </select>
            </div>

            {selectedProduct && (
              <div className="flex items-center gap-4 rounded-xl bg-background p-3">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <p className="text-foreground font-bold">
                  {selectedProduct.title}
                </p>
              </div>
            )}

            <div className="flex flex-col gap-3">
              <label className="text-foreground">{t("yourComment")}</label>

              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder={t("commentPlaceholder")}
                required
                rows={4}
                className="bg-background text-text-title rounded-xl p-3 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="btn bg-foreground text-background border-none"
            >
              {t("submit")}
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn bg-background text-foreground border-none">
                {t("close")}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </section>
  );
}
