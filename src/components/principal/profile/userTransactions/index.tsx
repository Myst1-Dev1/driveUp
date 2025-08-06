import { FaTimesCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";

export function UserTransactions() {
    return (
        <>
            <div className="max-w-md w-full overflow-y-auto h-full scrollDontShow lg:h-96 flex flex-col gap-4">
                <div className="bg-white p-3 border border-gray-300 w-full">
                    <div className="flex items-center gap-5">
                        <FaCircleCheck className="text-2xl text-green-400" />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-normal">Koenigsegg alugado por 5 horás</h6>
                            <span className="font-semibold text-xl">R$:800,00</span>
                            <span className="text-xs font-light text-gray-600">Pago no dia 22/05/2025</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 border border-gray-300 w-full">
                    <div className="flex items-center gap-5">
                        <FaTimesCircle className="text-2xl text-red-600" />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-normal">Koenigsegg alugado por 5 horás</h6>
                            <span className="font-semibold text-xl">R$:800,00</span>
                            <span className="text-xs font-light text-gray-600">Pagamento não efetuado</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 border border-gray-300 w-full">
                    <div className="flex items-center gap-5">
                        <FaTimesCircle className="text-2xl text-red-600" />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-normal">Koenigsegg alugado por 5 horás</h6>
                            <span className="font-semibold text-xl">R$:800,00</span>
                            <span className="text-xs font-light text-gray-600">Pagamento não efetuado</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-3 border border-gray-300 w-full">
                    <div className="flex items-center gap-5">
                        <FaTimesCircle className="text-2xl text-red-600" />
                        <div className="flex flex-col gap-1">
                            <h6 className="font-normal">Koenigsegg alugado por 5 horás</h6>
                            <span className="font-semibold text-xl">R$:800,00</span>
                            <span className="text-xs font-light text-gray-600">Pagamento não efetuado</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}