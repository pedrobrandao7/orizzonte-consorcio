import React, { useState } from 'react';
import emailjs from '@emailjs/browser';


// ARMAZENA OS VALORES DO FORMULARIO
const Form = () => {
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        gender: '',
        phone: '',
        email: '',
        consortium_type: '',        // Tipo de consórcio
        consortium_credit: '',      // Crédito desejado
        consortium_term: '',        // Prazo em meses
        consortium_installments: '' // Número de parcelas
    });

    // Máscara de telefone
    const handlePhoneChange = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length > 0) value = value.replace(/^(\d{2})/, '($1) ');
        if (value.length > 6) value = value.replace(/(\(\d{2}\) )(\d{5})(\d)/, '$1$2-$3');
        setFormData({ ...formData, phone: value });
    };

    // FORMATAÇÃO MONETARIA
    const formatCurrency = (value) => {
        let numberValue = value.replace(/\D/g, '');

        if (!numberValue) return '';

        let cents = (Number(numberValue) / 100).toFixed(2);

        let [reais, centavos] = cents.split('.');

        reais = reais.replace(/\B(?=(\d{3})+(?!\d))/g, '.');

        return `R$ ${reais},${centavos}`;
    };

    // Atualiza o estado de parcelas ou crédito
    const handleCurrencyChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: formatCurrency(value)
        });
    };

    // TRUE OU FALSE SE ESTIVER ENVIANDO APÓS APERTAR O BOTAO
    const [isSubmitting, setIsSubmitting] = useState(false);

    // PEGA AS INFORMAÇÕES DO FORMULARIO
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // ENVIA AS INFORMAÇÕES PARA O EMAIL QUANDO O BOTAO É CLICADO
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        emailjs.send(
            'service_vsoc0fi',    // Service ID
            'template_umfcgwj',    // Template ID
            formData,
            'Bb_ZyRk-fXTPCIpyf'      // Public Key
        )
            .then((result) => {
                console.log('Email enviado:', result.text);
                alert('Mensagem enviada com sucesso! Um atendente entrará em contato com você.');
                setFormData({
                    first_name: '',
                    last_name: '',
                    gender: '',
                    phone: '',
                    email: '',
                    consortium_type: '',
                    consortium_credit: '',
                    consortium_term: '',
                    consortium_installments: ''
                });
            }, (error) => {
                console.error('Erro ao enviar:', error.text);
                alert('Ocorreu um erro. Tente novamente.');
            })
            .finally(() => {
                setIsSubmitting(false); // libera o botão
            });
    };

    return (
        <form
            className="flex flex-col max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-lg mt-20 mb-10"
            onSubmit={handleSubmit}
        >
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 ">
                Entre em contato
            </h2>

            {/* ================================================ Seção Dados Pessoais ====================================  */}

            <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                    <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-700">Nome</label>
                    <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={handleChange}
                        placeholder="Seu nome"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>

                <div>
                    <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-700">Sobrenome</label>
                    <input
                        type="text"
                        id="last_name"
                        value={formData.last_name}
                        onChange={handleChange}
                        placeholder="Seu sobrenome"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>

                <div>
                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-700">Gênero</label>
                    <select
                        id="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    >
                        <option value="">Selecione</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Não-binário">Não-binário</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Telefone</label>
                    <input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handlePhoneChange}
                        placeholder="(11) 99999-9999"
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Seu e-mail"
                    required
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                />
            </div>

            {/* ======================================= Seção Dados do Consórcio -===============================================*/}

            <h3 className="text-xl font-semibold text-gray-800 mb-4 mt-10">Dados do Consórcio</h3>
            <div className="grid mb-6 md:grid-cols-2 gap-10">
                <div>
                    <label htmlFor="consortium_type" className="block mb-2 text-sm font-medium text-gray-700">Tipo de Consórcio</label>
                    <select
                        id="consortium_type"
                        value={formData.consortium_type}
                        onChange={handleChange}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    >
                        <option value="">Selecione</option>
                        <option value="Imóvel">Imóvel</option>
                        <option value="Veículo">Veículo</option>
                        <option value="Serviço">Serviço</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="consortium_credit" className="block mb-2 text-sm font-medium text-gray-700">
                        Crédito desejado
                    </label>
                    <input
                        type="text"
                        id="consortium_credit"
                        value={formData.consortium_credit}
                        onChange={handleCurrencyChange}
                        placeholder="R$ 0,00"
                        maxLength={15}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>

                <div>
                    <label htmlFor="consortium_term" className="block mb-2 text-sm font-medium text-gray-700">Prazo (meses)</label>
                    <input
                        type="number"
                        id="consortium_term"
                        value={formData.consortium_term}
                        onChange={handleChange}
                        placeholder="Ex.: 60"
                        maxLength={3}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>

                <div>
                    <label htmlFor="consortium_installments" className="block mb-2 text-sm font-medium text-gray-700">
                        Parcelas
                    </label>
                    <input
                        type="text"
                        id="consortium_installments"
                        value={formData.consortium_installments}
                        onChange={handleCurrencyChange}
                        placeholder="R$ 0,00"
                        maxLength={11}
                        required
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3"
                    />
                </div>

            </div>

            <button
                type="submit"
                disabled={isSubmitting} // desabilita enquanto envia
                className="w-auto sm:w-auto px-6 py-3 text-white font-medium rounded-lg bg-gradient-to-r from-amber-300 to-amber-400 shadow-lg shadow-amber-400/50 duration-500 hover:scale-110 cursor-pointer "
            >
                {isSubmitting ? 'Enviando...' : 'Enviar'}
            </button>
        </form>
    );
};

export default Form;
